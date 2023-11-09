const containerForApp = document.getElementById('containerForApp');
const openApp = document.getElementById('openApp');
const SCreen = document.getElementById('screen');
const safari = document.getElementById('safari');
const callPhone = document.getElementById('callPhone');
const instagram = document.getElementById('instagram');

safari.addEventListener('click', ()=>{
    containerForApp.style.display = 'none';
    openApp.style.display = 'block';
    SCreen.style.background = '#fff';
    openApp.innerHTML = `
        <div id="topContainer" style="height:453px;"></div>
        <div class="bar">
            <nav class="navigation">
                <button id="buttonSearch" class="buttonNavigation" style="margin-right: 0px;">
                    <img src="icon/search_FILL0_wght400_GRAD0_opsz48.png">
                </button>
                <input type="text" value="" id="searchBar" placeholder="search or enter website">
                <button  class="buttonNavigation" style="margin-left: 0px;">
                    <img src="icon/keyboard_voice_FILL0_wght400_GRAD0_opsz48.png">
                </button>
            </nav>
            <nav class="buttonBar">
                <button id="backward" class="buttonNavigation">
                    <img src="icon/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.png">
                </button>
                <button id="forward" class="buttonNavigation">
                    <img src="icon/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.png">
                </button>
                <button id="publish" class="buttonNavigation">
                    <img src="icon/publish_FILL0_wght400_GRAD0_opsz48.png">
                </button>
                <button id="import" class="buttonNavigation">
                    <img src="icon/import_contacts_FILL0_wght400_GRAD0_opsz48.png">
                </button>
                <button id="shadow" class="buttonNavigation">
                    <img src="icon/shadow_FILL0_wght400_GRAD0_opsz48.png">
                </button>
            </nav>
        </div>
    `;
    document.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter') {
            console.log('pas');
            if (document.getElementById('searchBar').value != '') {
                let e = document.getElementById('searchBar');
                document.getElementById('topContainer').innerHTML = `You don't have internet for search`;
            }
        }
    })
});
callPhone.addEventListener('click', ()=>{
    containerForApp.style.display = 'none';
    openApp.style.display = 'block';
    SCreen.style.background = '#fff';
    openApp.innerHTML = `
        <div class="containerUp"></div>
        <div class="board">
            <button class="callButton" id="buttonOne">1</button>
            <button class="callButton" id="buttonTwo">2</button>
            <button class="callButton" id="buttonThree">3</button><br>
            <button class="callButton" id="buttonFour">4</button>
            <button class="callButton" id="buttonFive">5</button>
            <button class="callButton" id="buttonSex">6</button><br>
            <button class="callButton" id="buttonSeven">7</button>
            <button class="callButton" id="buttonEight">8</button>
            <button class="callButton" id="buttonNine">9</button><br>
            <button class="callButton" id="buttonAsterisk">*</button>
            <button class="callButton" id="buttonZero">0</button>
            <button class="callBUtton" id="buttonHash">#</button>
        </div>
        <div class="containerDown">
            <button class="callButtonDown" id="buttonFavorite">     </button>
        </div>
    `;
});
instagram.addEventListener('click', ()=>{
    containerForApp.style.display='none';
    openApp.style.display='block';
    SCreen.style.background = '#fff';
    openApp.innerHTML=`
        <div>
            <div class="topBar">
                <div class="logo">
                    <p>Instagram</p>
                </div>
                <div class="containerIcon">
                    <div class="favorite">
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <div class="messenger">
                        <span class="material-symbols-outlined">
                            chat
                        </span>
                    </div>
                </div>
            </div>
            <div class="containerOfState">
                <div class="state"></div>
                <div class="state"></div>
                <div class="state"></div>
                <div class="state"></div>
                <div class="state"></div>
                <div class="state"></div>
                <div class="state"></div>
                <div class="state"></div>
                <div class="state"></div>
                <div class="state"></div>
            </div>
            <div class="content"></div>
            <div class="bottomBar">
                <span class="material-symbols-outlined">
                    home
                </span>
                <span class="material-symbols-outlined">
                search
                </span>
                <span class="material-symbols-outlined">
                    add_box
                </span>
                <span class="material-symbols-outlined">
                    movie
                </span>
                <span class="material-symbols-outlined">
                    account_circle
                </span>
            </div>
        </div>
    `;
})