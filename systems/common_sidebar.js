document.write(`
<aside class="sidebar">
    <div class="sidebar-header">
        <h1 class="logo">
            <a href="../index.html"><img src="../images/logo.png" alt="TOHO HOUSE NEXT"></a>
        </h1>
    </div>

    <nav class="sidebar-nav">
        <ul>
            <li>
                <a href="../index.html" class="tab-link">← トップに戻る</a>
            </li>

            <li>
                <a href="#" class="tab-link active">稼働中のシステム</a>
                <ul class="submenu open">
                    <li><a href="../index.html#sys-syslog">・シスろぐ</a></li>
                    <li><a href="../index.html#sys-suumo">・SuumoQuick</a></li>
                    <li><a href="../index.html#sys-multi">・MultiQuick</a></li>
                    <li><a href="../index.html#sys-gps">・TohoGPS</a></li>
                    <li><a href="../index.html#sys-recruit">・写真ダウンローダー</a></li>
                    <li><a href="../index.html#sys-ppap">・PDF-PPAP</a></li>
                    <li><a href="../index.html#sys-dec">・PDFdec</a></li>
                    <li><a href="../index.html#sys-cutter">・PDFCutter</a></li>
                    <li><a href="../index.html#sys-uploader">・東宝アップローダー</a></li>
                    <li><a href="../index.html#sys-backup">・KASHIKA自動バックアップ</a></li>
                    <li><a href="../index.html#sys-light">・PDF軽くなーる</a></li>
                    <li><a href="../index.html#sys-summary">・KASHIKAデータ集計</a></li>
                    <li><a href="../index.html#sys-voice">・コエキャッチ</a></li>
                    <li><a href="../index.html#sys-bukkaku">・Auto物確</a></li>
                </ul>
            </li>

            <li>
                <a href="#" class="tab-link">開発検討中</a>
                <ul class="submenu open">
                    <li><a href="../index.html#sys-ai-satei">・AI不動産査定エンジン</a></li>
                    <li><a href="../index.html#sys-madori">・Auto間取り図</a></li>
                </ul>
            </li>
        </ul>
    </nav>

    <div class="sidebar-contact">
        <p class="sc-label">システムに関するご相談</p>
        <div class="sc-number">
            <span class="sc-icon">📞</span> 外線 03-4330-4444
        </div>
    </div>

    <div style="padding: 0 20px; margin-bottom: 20px;">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiudRL0RKO8iXlA-ITugtBdkkOjMn_Zro2fA8vIKAqcXLmXg/viewform" target="_blank" style="display: block; background: #00aaff; color: #fff; text-align: center; padding: 12px 0; border-radius: 6px; font-weight: bold; font-size: 0.9rem; text-decoration: none; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: 0.3s;">
            ✉️ お問い合わせフォーム
        </a>
    </div>

    <div class="sidebar-footer">
        <p>&copy; TOHO HOUSE NEXT</p>
    </div>
</aside>
`);
