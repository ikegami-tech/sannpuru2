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
                
                // (オプション) 画面の一番上までスクロールする
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });
});
