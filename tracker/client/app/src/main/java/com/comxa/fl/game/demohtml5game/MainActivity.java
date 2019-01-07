package com.comxa.fl.game.demohtml5game;


import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;
import android.view.KeyEvent;

public class MainActivity extends AppCompatActivity {

    protected WebView myWeb;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        /* Находим наш браузер */
        myWeb= (WebView) findViewById(R.id.webView);

        /* Настраиваем наш браузер */
        myWeb.getSettings().setUseWideViewPort(true);
        myWeb.setInitialScale(1);
        myWeb.getSettings().setJavaScriptEnabled(true);

        /* Загружаем страничку */
        myWeb.loadUrl("http://napol.kl.com.ua/kurs/");
    }

    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if ((keyCode == KeyEvent.KEYCODE_BACK) && myWeb.canGoBack()) {
            myWeb.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }
}