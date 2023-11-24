package com.example.cademeutime

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.cademeutime.ui.theme.CadeMeuTimeTheme

class MainActivity : ComponentActivity() {

    lateinit var webView: WebView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.mobile)

        webView = findViewById<WebView>(R.id.web) as WebView

        webView.loadUrl("linkAquiDoProjeto")

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