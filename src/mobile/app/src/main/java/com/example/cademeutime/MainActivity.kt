package com.example.cademeutime

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity

class MainActivity : ComponentActivity() {

    lateinit var webView: WebView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.mobile)

        webView = findViewById<WebView>(R.id.web) as WebView

        webView.loadUrl("https://faberdata.com.br/cademeutime/")

        webView.settings.javaScriptEnabled = true

        webView.webViewClient = WebViewClient()

        webView.settings.setSupportZoom(true)
    }

    override fun onBackPressed() {
        if(webView.canGoBack()){
            webView.goBack()
        }else{
            finish()
        }
    }

}
