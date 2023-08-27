package com.example.ussdapp;

import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.telephony.TelephonyManager;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ActivityResultLauncher<String> callPermissionLauncher=registerForActivityResult(new ActivityResultContracts.RequestPermission(),granted->{});

        if(ActivityCompat.checkSelfPermission(this, android.Manifest.permission.CALL_PHONE)!= PackageManager.PERMISSION_GRANTED){
            callPermissionLauncher.launch(android.Manifest.permission.CALL_PHONE);
        }

        Button beginButton=findViewById(R.id.beginButton);
        beginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                runSimpleUSSDCode("*99#");
            }
        });
    }

    private void runSimpleUSSDCode(String s) {
        if(ActivityCompat.checkSelfPermission(this, Manifest.permission.CALL_PHONE)!= PackageManager.PERMISSION_GRANTED){
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                TelephonyManager manager=(TelephonyManager) getSystemService(TELEPHONY_SERVICE);
                View nview= LayoutInflater.from(this).inflate(R.layout.status_dialog,null);
                TextView msgview=nview.findViewById(R.id.msgbox);
                AlertDialog.Builder alertbuilder=new AlertDialog.Builder(this);
                alertbuilder.setView(nview);
                alertbuilder.show();

                manager.sendUssdRequest(s, new TelephonyManager.UssdResponseCallback() {
                    @Override
                    public void onReceiveUssdResponse(TelephonyManager telephonyManager, String request, CharSequence response) {
                        super.onReceiveUssdResponse(telephonyManager, request, response);
                        msgview.setText(response.toString());
                    }

                    @Override
                    public void onReceiveUssdResponseFailed(TelephonyManager telephonyManager, String request, int failureCode) {
                        super.onReceiveUssdResponseFailed(telephonyManager, request, failureCode);
                        msgview.setText("Failed");

                    }
                },new Handler());
            }
        }
        else {
            s = s.substring(0, s.length() - 1);
            s += Uri.encode("#");
            Intent intent = new Intent(Intent.ACTION_CALL, Uri.parse("tel:" + s));
            startActivity(intent);
        }
    }
}