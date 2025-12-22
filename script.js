document.addEventListener("DOMContentLoaded", function () {
    // 1. すべてのタブリンクとセクションを取得
    const tabLinks = document.querySelectorAll(".tab-link");
    const sections = document.querySelectorAll(".main-content section, .main-content .hero");

    // 2. リンクがクリックされたときの動作
    tabLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // リンクの普通の動作（ジャンプ）を止める

            // A. 一旦すべての「active」を外す（サイドバー）
            tabLinks.forEach(item => item.classList.remove("active"));
            // B. クリックされた自分だけに「active」をつける
            this.classList.add("active");

            // C. 表示するターゲットのIDを取得
            const targetId = this.getAttribute("data-target");

            // D. すべてのセクションを隠す
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // E. ターゲットのセクションだけ表示する
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
                
                // ▼▼▼ 修正：タブを切り替えたら、強制的に「一覧画面」に戻す ▼▼▼
                if (targetId === 'released') {
                    closeDetail(); // 詳細を閉じて一覧を表示する関数を呼び出す
                }
                
                // 画面の一番上までスクロールする
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });
});

/* --- 詳細画面の切り替え機能 --- */

// 詳細ページを開く関数
function openDetail(detailId) {
    // 1. 一覧画面を隠す
    const listView = document.getElementById('release-list-view');
    if (listView) listView.style.display = 'none';
    
    // 2. 指定された詳細画面を表示する
    const targetDetail = document.getElementById(detailId);
    if (targetDetail) {
        targetDetail.style.display = 'block';
        // 画面の一番上までスクロールする
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// 一覧ページに戻る関数
function closeDetail() {
    // 1. すべての詳細画面を隠す
    const details = document.querySelectorAll('.detail-view');
    details.forEach(detail => {
        detail.style.display = 'none';
    });

    // 2. 一覧画面を表示する
    const listView = document.getElementById('release-list-view');
    if (listView) listView.style.display = 'block';
    
    // ※タブ切り替え時にスクロールさせたくない場合もあるので、
    // ここではスクロール処理を入れないか、呼び出し元で制御します。
}
