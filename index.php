<?php
session_start();

include "assets/access.php";


?>

<!DOCTYPE html>
<html>

<head>
  <title>Ofekal Naudnik</title>
  <link rel="icon" href="images/icon.png" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
    integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>


  <div class="screen" id="startupScreen">
    <img src="images/icon.png" alt="Ofekal Naudnik" draggable="false" style="width:200px ;" />
    <img src="images/load.gif" alt="Loading Wheel" draggable="false" style="margin:10px ; width:100px ;" />
  </div>
  <div class="screen" id="lockscreen">
    <div id="lockscreenStageOne">
      <div id="lockClockContainer">
        <h1 id="lockClock">7:37 PM</h1>
        <h1>Press Anywhere to Continue</h1>
      </div>
      <img src="images/powerOff.png" alt="Power Off" draggable="false" id="lockPowerOff"
        onclick="toggleLockPowerOffOptions()" title="Power Options" />
      <div id="lockPowerOffOptions">
        <i class="fa-solid fa-arrow-rotate-right coolLink" title="Restart" onclick="restart()"></i>
        <i class="fa-solid fa-power-off coolLink" title="Power Off" onclick="powerOff()"></i>
      </div>
    </div>
    <div id="lockscreenStageTwo">
      <img src="#" alt="User Profile" draggable="false" style="width:150px ;" id="lockProfile" />
      <h1>Welcome Back, <span class="usernameAppearance">User</span>!</h1>
      <div id="sliderBar">
        <div id="thumb"></div>
      </div>
      <div id="passwordBar">
        <input type="password" placeholder="Type here..." class="coolInput" id="password" />
        <button id="submitBtn" onclick="submit()"><i class="fa-solid fa-arrow-right-to-bracket"></i></button>
      </div>
      <p id="lockBlock">Incorrect Password</p>
      <h2 id="lockRequirement">Swipe to Continue</h2>
    </div>
  </div>
  <div class="screen" id="desktop">
    <?php
      if (isset($_SESSION["username"])) {
        echo '<div id="tipForSavingData">
      <h2>Tip:</h2>
      <p>Click this to save your data to the server.</p>
      <h1>></h1>
    </div><div class="desktopIcon" id="syncIcon" onclick="_SAVE_DATA()" style="margin-top:calc(100vh - 220px) ; margin-left:calc(100vw - 130px) ;">
      <img src="images/saveDocumentIcon.png" alt="Save Data" draggable="false" />
      <p>Save Data</p>
    </div>';
      }
    ?>
    <div class="popup" id="publishProjectPopup">
      <h1>Information Needed</h1><br>
      <p>Please title your project.</p><br>
      <input type="text" placeholder="Type here..." class="coolInput" id="newProjectNameInput" /><br><br>
      <button class="coolBtn negBtn" onclick="cancelPublishProject()">Cancel</button>
      <button class="coolBtn" onclick="okPublishProject()">OK</button>
    </div>
    <div id="codeWithTletkuContent">
      <div id="cwtResources">
        <div id="cwtResourcesBar">
          <!-- <button class="coolBtn">Graphics</button> -->
          <h2>Click on a Block to Copy Source</h2>
          <!-- <button class="coolBtn">Music / Sound FX</button> -->
        </div>
        <div id="cwtResourcesGraphics"></div>
      </div>
      <h1 id="cwtAuthor">Author</h1>
      <button class="coolBtn" id="forkBtn" onclick="forkProject()">Fork</button>
      <iframe src="code.html" frameborder="0" id="cwtPreview"></iframe>
      <div id="codeEditor">
        <div id="codeEditorTopBar">
          <button class="coolBtn" onclick="cwtTestCode()">Run</button>
        </div>
        <div id="codeEditorContent">
          <textarea name="cwtEditor" id="cwtEditor"></textarea>
          <iframe src="code.html" frameborder="0" id="cwtOutput"></iframe>
        </div>
      </div>
    </div>
    <div id="codeWithTletkuSidebar">
      <div id="cwtSearchBarContainerContainer">
        <div id="cwtSearchBarContainer">
          <input type="search" id="cwtSearchBar" class="coolInput" placeholder="Search...">
          <button id="cwtSearchBtn" class="coolBtn" onclick="searchForProjects()">GO!</button>
        </div>
      </div>
      <?php

    $projects = glob("codeWithTletku/projects/*.txt");

    foreach ($projects as $project) {
      $name = basename($project);
      echo "<div class='project' onclick='showProject(`". str_replace(["'", '"'], ["&#39;", "&quot;"], file_get_contents("codeWithTletku/projects/$name")) ."`, `".file_get_contents("codeWithTletku/projects2accounts/$name")."`, this)'>".substr($name, 0, -4)."</div>";
    }

      ?>
    </div>
    <div id="codeWithTletkuTopbar">
      <div style="width: 100px; height: 100px;"></div>
      <?php
        if (isset($_SESSION["username"])) {
          echo "<button class='coolBtn' onclick='newProject()'>Create Project</button>";
          echo "<button class='coolBtn' onclick='publishProject()'>Publish Project</button>";
          echo "<button class='coolBtn' onclick='findResources()'>Find Resources</button>";
        } else {
          echo "<button class='coolBtn' onclick='createAccount()'>Log In</button>";
        }
      ?>
      <div class="divider"></div>
      <button class="coolBtn closeCodeWithTletkuBtn" onclick="exitCodeWithTletku()">Exit</button>
    </div>
    <div id="keyboard">
      <div class="keyboardRow"></div>
      <div class="keyboardRow"></div>
      <div class="keyboardRow"></div>
      <div class="keyboardRow"></div>
      <div class="keyboardRow"></div>
      <div class="keyboardRow"></div>
      <div class="keyboardRow">
        <select name="keyboardLang" id="keyboardLang" class="coolBtn" onchange="updateKeyBoard()">
          <option value="0">Latin</option>
          <option value="1">Cyrillic</option>
          <option value="2">Greek</option>
          <option value="7">Chinese (Bopomofo)</option>
          <option value="8">Japanese (Hiragana)</option>
          <option value="9">Japanese (Katakana)</option>
          <option value="10">Korean (Hangul)</option>
          <option value="3">Arabic</option>
          <option value="4">Hebrew</option>
          <option value="11">Devanagari</option>
          <option value="5">Georgian</option>
          <option value="6">Armenian</option>
          <option value="12">Oriya (Odia)</option>
          <option value="13">Gujarati</option>
          <option value="14">Kannada</option>
          <option value="15">Telugu</option>
          <option value="16">Tamil</option>
          <option value="17">Bengali</option>
          <option value="18">Sinhala</option>
          <option value="19">Dhivehi</option>
          <option value="20">Tibetan</option>
          <option value="21">Thai</option>
          <option value="22">Khmer</option>
          <option value="23">Lao</option>
          <option value="24">Burmese</option>
          <option value="25">Javanese</option>
          <option value="26">Sundanese</option>
          <option value="27">Balinese</option>
          <option value="28">Baybayin</option>
          <option value="29">Tifinagh</option>
          <option value="30">N'Ko</option>
          <option value="31">Cherokee (Incomplete)</option>
          <option value="32">Runes</option>
          <option value="33">Glagolitic</option>
          <option value="34">Phoenecian</option>
          <option value="35">Orkhon</option>
          <option value="36">Ogham</option>
          <option value="37">Hungarian Runes</option>
          <option value="38">International Phonetic Alphabet (IPA)</option>
          <option value="39">Emoji</option>
        </select>
        <button class="coolBtn" style="width: 150px;" id="keyboardToggleCaseBtn">Capitalize</button>
        <button class="coolBtn" style="color:red ; width: 100px;" onclick="keyboardE = false; keyboardEl.style.marginTop = '100vh'; clickSnd.currentTime = 0; clickSnd.play()">Close</button>
      </div>
    </div>
    <div class="window" id="terminal" onmousedown="selectWin(terminalEl)">
      <div class="windowBar">
        <div class="draggableArea" id="terminalBar">
          <h2 class="windowTitle">Terminal</h2>
          <img src="images/terminal.png" alt="Icon" draggable="false"
            class="windowIcon" />
        </div>
        <div class="windowActionButtons">
          <button class="infoBtn" onclick="getHelp('terminal')">?</button>
          <button class="minimizeBtn" onclick="minimizeTerminal()">-</button>
          <button class="maximizeBtn" onclick="maximizeTerminal()"><i class="fa-regular fa-square"></i></button>
          <button class="closeBtn" onclick="closeTerminal()">X</button>
        </div>
      </div>
      <div class="windowContent" id="terminalContent">
        <div id="terminalContentVek">
          <p>Welcome to Ofekal Terminal. Type "help" to see all commands.</p>
        </div>
        <div id="terminalBarVek">
          <input type="text" id="terminalInput" placeholder="Enter a Command...">
          <button class="coolBtn" id="terminalBtn" onclick="termQuery()">Enter ></button>
        </div>
      </div>
    </div>
    <div class="fileReader" id="addNewAppScreenshotPopup">
      <h1>Add new Screenshot</h1><br>
      <div class="saveLocations" id="addNewAppScreenshotLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelAddNewAppScreenshot()">Cancel</button>
        <button class="coolBtn" onclick="okAddNewAppScreenshot()">OK</button>
      </div>
    </div>
    <div class="fileReader" id="chooseNewAppIconPopup">
      <h1>Choose New App Icon</h1><br>
      <div class="saveLocations" id="newAppIconLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelChooseNewAppIcon()">Cancel</button>
        <button class="coolBtn" onclick="okChooseNewAppIcon()">OK</button>
      </div>
    </div>
    <div class="fileReader" id="chooseSourceFilePopup">
      <h1>Choose Source File</h1><br>
      <div class="saveLocations" id="sourceFileChooseLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelChooseSourceFile()">Cancel</button>
        <button class="coolBtn" onclick="okChooseSourceFile()">OK</button>
      </div>
    </div>
    <div class="window" id="toolbox" onmousedown="selectWin(toolboxEl)">
      <div class="windowBar">
        <div class="draggableArea" id="toolboxBar">
          <h2 class="windowTitle">Toolbox</h2>
          <img src="images/toolbox.png" alt="Icon" draggable="false" class="windowIcon" />
        </div>
        <div class="windowActionButtons">
          <button class="infoBtn" onclick="getHelp('toolbox')">?</button>
          <button class="minimizeBtn" onclick="minimizeToolbox()">-</button>
          <button class="maximizeBtn" onclick="maximizeToolbox()"><i class="fa-regular fa-square"></i></button>
          <button class="closeBtn" onclick="closeToolbox()">X</button>
        </div>
      </div>
      <div class="windowContent noInternetScreen">
        <img src="images/noWifi.png" alt="No Internet" draggable="false" />
        <h2>No Internet</h2>
        <button class="coolBtn" onclick="openSettings(); toSettingsNetworkAndInternet()">Connect to the
          Internet</button>
      </div>
      <div class="windowContent" id="toolboxContent">
        <div id="toolboxNotification">Hello, World!</div>
        <div
          style="width: 100%; height: 60px; background-color: rgba(0, 0, 0, .2); display: flex; align-items: center; justify-content: space-evenly;">
          <img src="images/toolbox.png" alt="Toolbox" style="width: 50px;" draggable="false">
          <input type="search" class="coolInput" id="toolboxSearchbar" style="width: 60%;"
            placeholder="Search for apps, games, and more...">
          <button class="coolBtn" style="margin: 5px; padding: 10px;" onclick="searchToolbox()">Search</button>
          <button class="coolBtn" style="margin: 5px; padding: 10px;" onclick="toToolboxHome()">Home</button>
          <button class="coolBtn" style="margin: 5px; padding: 10px;" onclick="uploadApp()">Upload App</button>
        </div>
        <div id="toolboxContentVek">
          <br>
          <h1>Welcome to Toolbox</h1><br>
          <div id="suggested">
            <img src="#" alt="Suggested Application Logo" draggable="false" id="suggestedGraphic">
            <h2 id="suggestedName"></h2>
            <p id="suggestedDesc"></p>
            <button class="coolBtn" onclick="okSuggestion()">See More</button>
          </div>
          <div id="moreSuggested"></div><br>
          <p>&copy; 2026 - Vikenait Productions</p><br>
        </div>
        <div id="toolboxSearchContent"></div>
        <div id="toolboxSeeMore">
          <br>
          <div style="width: 100%; height: 100px; display: flex; align-items: center;
          justify-content: center;">
            <img src="#" alt="See More Logo" id="seeMoreLogo" style="margin-right: 10px; border-radius: 5px; height: 100%;" draggable="false">
            <h1 id="seeMoreName" style="margin-left: 10px;"></h1>
          </div>
          <div id="seeMoreBtns"></div><br>
          <h2 id="seeMoreAuthor"></h2><br><br>
          <h1>Screenshots</h1><br>
          <div id="slideshow">
            <button onclick="previous()"><</button>
            <button onclick="next()">></button>
          </div><br>
          <button class="coolBtn" onclick="writeAReview()">Write a Review</button><br>
          <h1>Reviews</h1><br>
          <div id="reviews"></div><br>
        </div>
        <div id="toolboxReview">
          <br>
          <img src="#" alt="Reviewing Application" style="width: 150px; margin: 10px; border-radius: 5px;" id="reviewLogo" draggable="false"><br>
          <h1>Write a Review</h1>
          <textarea name="review" id="review" style="width: calc(100% - 130px); height: 300px; margin: 50px;" class="coolInput"></textarea>
          <button class="coolBtn" onclick="okWriteReview()">Submit</button>
        </div>
        <div id="toolboxUpload"><br>
          <h1>Upload an Application</h1><br><br>
          <h2 id="toolboxUploadLS"></h2><br>
          <button class="coolBtn" onclick="chooseSourceFile()">Choose Source File</button><br>
          <hr><br>
          <label for="newAppName">
            Name:
            <input type="text" class="coolInput" id="newAppName" name="newAppName" placeholder="Application name...">
          </label><br>
          <hr><br>
          <label for="newAppType">
            Type:
            <select name="newAppType" id="newAppType" class="coolBtn">
              <option value="search engine">Search Engine</option>
              <option value="calculator">Calculator</option>
              <option value="clock">Clock</option>
              <option value="video game">Video Game</option>
              <option value="creative generator">Creative Generator</option>
              <option value="web app">Web App</option>
              <option value="social media">Social Media</option>
              <option value="email client">Email Client</option>
              <option value="software store">Software Store</option>
              <option value="weather app">Weather App</option>
              <option value="browser">Browser</option>
              <option value="map software">Map Software</option>
              <option value="media viewer">Media Viewer</option>
              <option value="text editor">Text Editor</option>
              <option value="graphic editor">Graphic Editor</option>
              <option value="settings">Settings</option>
              <option value="file manager">File Manager</option>
              <option value="video editing software">Video Editing Software</option>
              <option value="game engine">Game Engine</option>
              <option value="ofekal native">Ofekal Native</option>
              <option value="other">Other</option>
            </select>
          </label><br>
          <hr><br>
          <h2>New App Icon:</h2><br>
          <button class="coolBtn" onclick="chooseNewAppIcon()">Choose Icon</button><br>
          <img src="#" alt="New App Icon" id="newAppIcon" draggable="false"><br>
          <hr><br>
          <h2>Screenshots</h2><br>
          <button class="coolBtn" onclick="addNewAppScreenshot()">New Screenshot</button><br>
          <div id="newAppScreenshotContainer"></div><br>
          <hr><br>
          <button class="coolBtn" onclick="okUploadApp()" id="uploadAppBtn">Upload!</button>
          <img src="images/loadingBar.gif" alt="Uploading..." draggable="false" id="uploadLoader">
        </div>
      </div>
    </div>
    <div class="fileReader" id="uploadProfilePopup">
      <h1>Upload Folder Graphic</h1><br>
      <div class="saveLocations" id="profileUploadLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelUploadProfile()">Cancel</button>
        <button class="coolBtn" onclick="okUploadProfile()">OK</button>
      </div>
    </div>
    <div class="fileReader" id="uploadFolderGraphicPopup">
      <h1>Upload Folder Graphic</h1><br>
      <div class="saveLocations" id="folderGraphicUploadLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelUploadFolderGraphic()">Cancel</button>
        <button class="coolBtn" onclick="okUploadFolderGraphic()">OK</button>
      </div>
    </div>
    <div class="fileReader" id="uploadWallpaperPopup">
      <h1>Upload Wallpaper</h1><br>
      <div class="saveLocations" id="wallpaperUploadLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelUploadWallpaper()">Cancel</button>
        <button class="coolBtn" onclick="okUploadWallpaper()">OK</button>
      </div>
    </div>
    <div class="popup" id="deleteMediaPopup">
      <h1>Attention!</h1><br>
      <p>Are you sure to delete this?</p>
      <button class="coolBtn negBtn" onclick="cancelDeleteMedia()">Cancel</button>
      <button class="coolBtn" onclick="okDeleteMedia()">OK</button>
    </div>
    <div class="fileReader" id="openMediaPopup">
      <h1>Open Media</h1><br>
      <div class="saveLocations" id="mediaOpenLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelOpenMedia()">Cancel</button>
        <button class="coolBtn" onclick="okOpenMedia()">OK</button>
      </div>
    </div>
    <div class="window" id="media" onmousedown="selectWin(mediaEl)">
      <div class="windowBar">
        <div class="draggableArea" id="mediaBar">
          <h2 class="windowTitle">Media Viewer<span id="openedMediaName"></span></h2>
          <img src="images/media.png" alt="Icon" draggable="false" class="windowIcon" />
        </div>
        <div class="windowActionButtons">
          <button class="infoBtn" onclick="getHelp('media')">?</button>
          <button class="minimizeBtn" onclick="minimizeMedia()">-</button>
          <button class="maximizeBtn" onclick="maximizeMedia()"><i class="fa-regular fa-square"></i></button>
          <button class="closeBtn" onclick="closeMedia()">X</button>
        </div>
      </div>
      <div class="windowContent" id="mediaContent">
        <div id="mediaBarVek">
          <select id="MAB" class="coolBtn" onchange="checkValueMAB()">
            <option value="file">File</option>
            <option value="open">Open</option>
            <option value="delete">Delete</option>
          </select>
          <img src="images/zoomIn.png" alt="Zoom In" draggable="false" title="Zoom In"
            class="notepadIcon mediaImageControl" onclick="mediaZoom += 0.1" />
          <img src="images/zoomOut.png" alt="Zoom Out" draggable="false" title="Zoom Out"
            class="notepadIcon mediaImageControl" onclick="mediaZoom -= 0.1" />
          <img src="images/paint.png" alt="Open with Paint" draggable="false" title="Edit with Paint"
            class="notepadIcon mediaImageControl" onclick="openMediaToPaint()" />
        </div>
        <div id="mediaContentVek">
          <div id="mediaHome">
            <div style="width: 100%; height: 100px; display: flex; align-items: center; justify-content: space-evenly;">
              <img src="images/media.png" alt="Media" draggable="false">
              <h1>Welcome to Ofekal Media Viewer!</h1>
            </div>
            <h2>Click the "Open" button to view images, music, videos, etc.</h2>
            <button class="coolBtn" onclick="openMedia()">Open</button>
          </div>
          <div id="mediaImageViewer">
            <img src="#" alt="Media Image" id="mediaImg">
          </div>
          <div id="mediaMusicViewer">
            <audio src="#" id="mediaMusic" loop="true" controls></audio>
          </div>
        </div>
      </div>
    </div>
    <div class="popup" id="deleteImagePopup">
      <h1>Attention!</h1><br>
      <p>Are you sure to delete this image?</p>
      <button class="coolBtn negBtn" onclick="cancelDeleteImage()">Cancel</button>
      <button class="coolBtn" onclick="okDeleteImage()">OK</button>
    </div>
    <div class="fileReader" id="openImagePopup">
      <h1>Open Image</h1><br>
      <div class="saveLocations" id="paintOpenLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelOpenImage()">Cancel</button>
        <button class="coolBtn" onclick="okOpenImage()">OK</button>
      </div>
    </div>
    <div class="fileReader" id="saveArtworkPopup">
      <h1>Save Artwork</h1><br>
      <div class="saveLocations" id="paintSaveLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelSaveArtwork()">Cancel</button>
        <input type="text" id="newArtworkNameInput" placeholder="New Artwork Name..." class="coolInput"
          style="width:260px ; height:40px ; border-radius: 5px; padding:5px ; margin:0 ;" />
        <button class="coolBtn" onclick="okSaveArtwork()">OK</button>
      </div>
    </div>
    <div class="popup" id="newArtworkPopup">
      <h1>Attention!</h1><br>
      <p>Are you sure make a new artwork? Any unsaved work will be discarded.</p>
      <button class="coolBtn negBtn" onclick="cancelNewArtwork()">Cancel</button>
      <button class="coolBtn" onclick="okNewArtwork()">OK</button>
    </div>
    <div class="popup" id="shapeMenu">
      <h1>Shapes</h1><br>
      <div id="shapeContainer"></div><br>
      <button class="coolBtn" onclick="closeShapeMenu()">OK</button>
    </div>
    <div class="popup" id="paintSizePopup">
      <h1>Size / Style</h1><br>
      <div id="paintSizePreview"></div><br>
      <label for="paintSize">
        Size:
        <input type="range" name="paintSize" min="1" max="20" value="1" step="1" id="paintSizeInput">
      </label><br><br>
      <h2>Brush Style</h2>
      <div style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <img src="images/defaultLine.png" alt="Butt" draggable="false" class="notepadIcon"
          onclick="paintBrush = 'butt'" />
        <img src="images/circleLine.png" alt="Round" draggable="false" class="notepadIcon"
          onclick="paintBrush = 'round'" />
        <img src="images/squareLine.png" alt="Square" draggable="false" class="notepadIcon"
          onclick="paintBrush = 'square'" />
        <img src="images/sprayPaintLine.png" alt="Spray Paint" draggable="false" class="notepadIcon"
          onclick="paintBrush = 'spray paint'" style="border-radius:50% ;" />
      </div><br>
      <button class="coolBtn" onclick="closeSizePopup()">OK</button>
    </div>
    <div class="popup" id="newColorPopup">
      <h1>Custom Color</h1><br>
      <div style="width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <div class="colorRGB">
          <h1 style="color:red ;">Red</h1>
          <input type="range" id="newColorRed" min="0" max="255" value="0" step="1" />
        </div>
        <div class="colorRGB">
          <h1 style="color:lime ;">Green</h1>
          <input type="range" id="newColorGreen" min="0" max="255" value="0" step="1" />
        </div>
        <div class="colorRGB">
          <h1 style="color:blue ;">Blue</h1>
          <input type="range" id="newColorBlue" min="0" max="255" value="0" step="1" />
        </div>
      </div>
      <div
        style="width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:space-evenly ; margin-top:10px ; border-radius:5px ;"
        id="newColorPreview">
        <button class="coolBtn negBtn" onclick="cancelNewColor()">Cancel</button>
        <button class="coolBtn" onclick="okNewColor()">OK</button>
      </div>
    </div>
    <div class="popup" id="colorPopup">
      <h1>Color</h1><br>
      <div id="colorList"></div>
      <div
        style="width:100% ; height:60px ; display:flex ; align-items:center ; justify-content:space-evenly ; box-shadow: 0 -5px 10px rgba(0, 0, 0, .5) ; border-top: 1px solid white ; border-radius: 0 0 5px 5px ;"
        id="colorPreview">
        <button class="coolBtn" onclick="newColor()">Custom</button>
        <button class="coolBtn" onclick="closeColorPopup()">OK</button>
      </div>
    </div>
    <div class="popup" id="propertiesPopup">
      <h1>Properties</h1><br>
      <label for="canvasWidth">
        Width:
        <input name="canvasWidth" type="range" id="canvasWidth" style="cursor:url('images/pointer.png'), auto ;"
          min="16" max="1000" value="500" step="1" />
      </label><br>
      <label for="canvasHeight">
        Height:
        <input name="canvasHeight" type="range" id="canvasHeight" style="cursor:url('images/pointer.png'), auto ;"
          min="16" max="1000" value="300" step="1" />
      </label><br>
      <h3>Rotate</h3>
      <div style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:space-evenly ;"
        id="ropt">
        <img src="images/rotateLeft.png" alt="Rotate Left" draggable="false" title="Rotate Left" class="notepadIcon"
          onclick="rotateLeft()" />
        <img src="images/rotateRight.png" alt="Rotate Right" draggable="false" title="Rotate Right" class="notepadIcon"
          onclick="rotateRight()" />
      </div>
      <button class="coolBtn" onclick="closePropertiesPopup()">OK</button>
    </div>
    <div class="window" id="paint" onmousedown="selectWin(paintEl)">
      <div class="windowBar">
        <div class="draggableArea" id="paintBar">
          <h2 class="windowTitle">Paint<span id="openedGraphicName"></span></h2>
          <img src="images/paint.png" alt="Icon" draggable="false" class="windowIcon" />
        </div>
        <div class="windowActionButtons">
          <button class="infoBtn" onclick="getHelp('paint')">?</button>
          <button class="minimizeBtn" onclick="minimizePaint()">-</button>
          <button class="maximizeBtn" onclick="maximizePaint()"><i class="fa-regular fa-square"></i></button>
          <button class="closeBtn" onclick="closePaint()">X</button>
        </div>
      </div>
      <div class="windowContent" id="paintContent">
        <div id="paintTextContainer">
          <div style="width:40px ; height:100% ; background-color:rgba(255, 255, 255, .5) ; border-radius: 0 0 0 5px ;"
            onmousedown="paintTextDrag = true">
            <div
              style="width:5px ; height:5px ; border-radius:50% ; background-color:var(--theme) ; margin-left:-2.5px ; margin-top:-2.5px ; position:absolute ;">
            </div>
          </div>
          <input type="text" id="paintTextInput" class="coolInput" placeholder="Text..."
            style="padding:0 ; margin:0 ; height:calc(100% - 2px) ; padding-left:5px ; padding-right:5px ; width:250px ;" />
          <button class="coolBtn"
            style="width:48px ; height:48px ; padding:0 ; padding:0 ; display:flex ; align-items:center ; justify-content:center ;"
            onclick="paintBold = !paintBold"><strong>B</strong></button>
          <button class="coolBtn"
            style="width:48px ; height:48px ; padding:0 ; padding:0 ; display:flex ; align-items:center ; justify-content:center ;"
            onclick="paintItalic = !paintItalic"><em>I</em></button>
          <select id="paintFont" class="coolBtn">
            <option style="font-family:ubuntu, system-ui ;" value="ubuntu, system-ui">Ubuntu / System-UI</option>
            <option style="font-family:sans-serif ;" value="sans-serif">Sans Serif</option>
            <option style="font-family:serif ;" value="serif">Serif</option>
            <option style="font-family:monospace ;" value="monospace">Monospace</option>
            <option style="font-family:noto mono ;" value="noto mono">Noto Mono</option>
            <option style="font-family:cantarell ;" value="cantarell">Cantarell</option>
            <option style="font-family:montserrat ;" value="montserrat">Montserrat</option>
            <option style="font-family:caladea ;" value="caladea">Caladea</option>
          </select>
          <button class="coolBtn"
            style="padding:0 ; margin:0 ; height:calc(100% - 2px) ; border-radius: 0 5px 5px 0 ; display:flex ; align-items:center ; justify-content:center ; padding-left:10px ; padding-right:10px ;"
            onclick="writeText()">OK</button>
        </div>
        <div id="paintBarVek">
          <select id="PAB" class="coolBtn" onchange="checkValuePAB()">
            <option value="file">File</option>
            <option value="new">New</option>
            <option value="save">Save</option>
            <option value="save as">Save As</option>
            <option value="open">Open</option>
            <option value="delete">Delete</option>
            <option value="download">Download</option>
            <option value="upload">Upload</option>
            <option value="data url">Copy Data URL</option>
          </select>
          <select id="paintTools" class="coolBtn">
            <option value="pencil">Pencil</option>
            <option value="fill">Fill</option>
            <option value="eyedropper">Eyedropper</option>
            <option value="shape">Shape</option>
            <option value="text">Text</option>
          </select>
          <img src="images/menuIcon.png" alt="Properties" draggable="false" title="Properties" class="notepadIcon"
            onclick="openPropertiesPopup()" />
          <div title="Color" class="notepadIcon" onclick="openColorPopup()" id="paintColorIcon"></div>
          <div title="Size / Style" class="notepadIcon" onclick="openSizePopup()"
            style="width:20px ; height:20px ; border-radius:50% ; border: 1px solid black ; display: flex; align-items: center; justify-content: space-evenly; overflow:hidden ;">
            <div id="paintSize"></div>
          </div>
          <img src="images/pencil.png" alt="Toggle Eraser" draggable="false" title="Toggle Eraser" class="notepadIcon"
            onclick="toggleEraser()" id="eraserIcon" />
          <img src="images/shapes.png" alt="Shape Menu" draggable="false" title="Shape Menu" class="notepadIcon"
            onclick="openShapeMenu()" id="shapesIcon" />
          <img src="images/rotateLeft.png" alt="Undo" draggable="false" title="Undo" class="notepadIcon"
            onclick="undo()" id="undoIcon" />
        </div>
        <div id="paintContentVek">
          <canvas id="canvas"></canvas>
        </div>
      </div>
    </div>
    <!-- <div id="5" class="desktopIcon" style="margin-left: calc(100vw - 130px); margin-top: 10px;">
      <img id="graphic5" src="images/folder.png" draggable="false">
      <p id="folderName5">My Computer</p>
    </div> -->
    <div class="popup" id="deleteDocumentPopup">
      <h1>Attention!</h1><br>
      <p>Are you sure to delete this document?</p>
      <button class="coolBtn negBtn" onclick="cancelDeleteDocument()">Cancel</button>
      <button class="coolBtn" onclick="okDeleteDocument()">OK</button>
    </div>
    <div class="fileReader" id="openDocumentPopup">
      <h1>Open Document</h1><br>
      <div class="saveLocations" id="notepadOpenLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelOpenDocument()">Cancel</button>
        <button class="coolBtn" onclick="okOpenDocument()">OK</button>
      </div>
    </div>
    <div class="fileReader" id="saveDocumentPopup">
      <h1>Save Document</h1><br>
      <div class="saveLocations" id="notepadSaveLocations"></div>
      <div style="width:100% ; height:70px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelSaveDocument()">Cancel</button>
        <div
          style="width:350px ; height:50px ; display:flex ; align-items:center ; justify-content:space-evenly ; overflow:hidden ;">
          <input type="text" id="newDocumentNameInput" placeholder="New Document Name..." class="coolInput"
            style="width:260px ; height:40px ; border-radius: 5px 0 0 5px ; padding:5px ; margin:0 ;" />
          <select class="coolBtn" id="newDocumentFileExtension"
            style="width:85px ; height:50px ; border-radius: 0 5px 5px 0 ; margin:0 ; padding:5px ;">
            <option value="document">.txt</option>
            <option value="html">.html</option>
            <option value="let">.let</option>
            <option value="o++">.o++</option>
          </select>
        </div>
        <button class="coolBtn" onclick="okSaveDocument()">OK</button>
      </div>
    </div>
    <div class="popup" id="newDocumentPopup">
      <h1>Attention!</h1><br>
      <p>Are you sure to make a new document? Any unsaved work will be discarded.</p>
      <button class="coolBtn negBtn" onclick="cancelNewDocument()">Cancel</button>
      <button class="coolBtn" onclick="okNewDocument()">OK</button>
    </div>
    <div class="window" id="notepad" onmousedown="selectWin(notepadEl)">
      <div class="windowBar">
        <div class="draggableArea" id="notepadBar">
          <h2 class="windowTitle">Notepad<span id="noteName"></span></h2>
          <img src="images/notepad.png" alt="Icon" draggable="false" class="windowIcon" />
        </div>
        <div class="windowActionButtons">
          <button class="infoBtn" onclick="getHelp('notepad')">?</button>
          <button class="minimizeBtn" onclick="minimizeNotepad()">-</button>
          <button class="maximizeBtn" onclick="maximizeNotepad()"><i class="fa-regular fa-square"></i></button>
          <button class="closeBtn" onclick="closeNotepad()">X</button>
        </div>
      </div>
      <div class="windowContent" id="notepadContent">
        <div id="notepadBarVek">
          <img src="images/newDocumentIcon.png" alt="New Document" draggable="false" title="New Document"
            class="notepadIcon" onclick="newDocument()" />
          <img src="images/openDocumentIcon.png" alt="Open Document" draggable="false" title="Open Document"
            class="notepadIcon" onclick="openDocument()" />
          <img src="images/saveDocumentIcon.png" alt="Save Document" draggable="false" title="Save Document"
            class="notepadIcon" onclick="saveDocument()" id="saveDocumentBtn" />
          <img src="images/saveAsDocumentIcon.png" alt="Save Document As" draggable="false" title="Save Document As"
            class="notepadIcon" onclick="saveAsDocument()" />
          <img src="images/deleteDocumentIcon.png" alt="Delete Document" draggable="false" title="Delete Document"
            class="notepadIcon" onclick="deleteDocument()" />
          <img src="images/downloadIcon.png" alt="Download Document to Base OS" draggable="false"
            title="Download Document to Base OS" class="notepadIcon" onclick="downloadDocument()" />
          <img src="images/uploadIcon.png" alt="Upload Document from Base OS" draggable="false"
            title="Upload Document from Base OS" class="notepadIcon" onclick="uploadDocument()" />
          <img src="images/stickyNote.png" alt="New Sticky Note" draggable="false" title="New Sticky Note"
            class="notepadIcon" onclick="newStickyNote()" />
        </div>
        <textarea id="notepadContentVek" placeholder="Please do NOT type '%%%' or '`' as this will corrupt your data..."></textarea>
      </div>
    </div>
    <div class="popup" id="factoryResetPopup">
      <h1 style="color:red ;">FACTORY RESET</h1><br>
      <p>A Factory Reset requires authorization.</p>
      <input type="text" placeholder="User Password..." class="coolInput" id="factoryResetInput" /><br><br>
      <p id="frIncorrectPassword">Incorrect Password</p>
      <h2>This will:</h2>
      <ul>
        <li>Delete all of your files.</li>
        <li>Reset everything to factory setting.</li>
        <li>After the reset, be as a fresh install of Ofekal Naudnik.</li>
      </ul>
      <button class="coolBtn negBtn" onclick="cancelFactoryReset()">Cancel</button>
      <button class="coolBtn" onclick="okFactoryReset()">OK</button>
    </div>
    <div class="popup" id="adminSettingsPopup">
      <h1>Authorization Needed</h1><br>
      <p>Admin Settings requires authorization.</p>
      <input type="text" placeholder="User Password..." class="coolInput" id="adminSettingsInput" /><br><br>
      <p id="asIncorrectPassword">Incorrect Password</p>
      <button class="coolBtn negBtn" onclick="cancelToSettingsAdministratorSettings()">Cancel</button>
      <button class="coolBtn" onclick="okToSettingsAdministratorSettings()">OK</button>
    </div>
    <div id="askPrismSearchBarWidget">
      <img src="https://isaacio.farleyengineeredsolutions.org/search/d/images/icon.png" alt="Icon" draggable="false"
        id="prismAskIcon">
      <input id="askPrismSearchBarWidgetInput" type="text" placeholder="Search with AskPrism">
    </div>
    <div class="window" id="settings" onmousedown="selectWin(settingsEl)">
      <div class="windowBar">
        <div class="draggableArea" id="settingsBar">
          <h2 class="windowTitle">Settings</h2>
          <img src="images/settings.png" alt="Icon" draggable="false" class="windowIcon" />
        </div>
        <div class="windowActionButtons">
          <button class="infoBtn" onclick="getHelp('settings')">?</button>
          <button class="minimizeBtn" onclick="minimizeSettings()">-</button>
          <button class="maximizeBtn" onclick="maximizeSettings()"><i class="fa-regular fa-square"></i></button>
          <button class="closeBtn" onclick="closeSettings()">X</button>
        </div>
      </div>
      <div class="windowContent metroUI" id="settingsContent">
        <div class="metroSidebar"><br>
          <h2>Settings</h2>
          <p onclick="toSettingsHome()">Home</p>
          <p onclick="toSettingsNetworkAndInternet()">Network and Internet</p>
          <p onclick="toSettingsStorage()">Storage</p>
          <p onclick="toSettingsPersonalization()">Personalization</p>
          <p onclick="toSettingsAccessibility()">Accessibility</p>
          <p onclick="toSettingsAdministratorSettings()">Admin Settings</p>
        </div>
        <div class="metroContent" id="settingsAdminSettings"><br>
          <h1>Admin Settings</h1><br>
          <label for="username">
            Username:
            <input type="text" name="username" id="usernameInput" class="coolInput" placeholder="User" value="<?php if (isset($_SESSION["username"])) { echo $_SESSION["username"]; } ?>" />
            <button class="coolBtn"
              onclick="username = usernameInputEl.value; if (username == '') { username = 'User' }">OK</button>
          </label><br>
          <label for="password">
            Password:
            <input type="password" name="password" id="passwordInput" class="coolInput" placeholder="Swipe to Continue" value="<?php if (isset($_SESSION["username"])) { echo getPassword($_SESSION["username"]); } ?>" />
            <button class="coolBtn" onclick="password = passwordInputEl.value">OK</button>
          </label><br><br>
          <h2>Profile Picture</h2>
          <img src="#" alt="Profile" id="profilePreview" draggable="false" /><br>
          <div id="profileContainer">
            <img src="images/icon.png" alt="Profile Choice" draggable="false" onclick="profile = 'images/icon.png'" />
            <img src="images/happyTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/happyTletku.png'" />
            <img src="images/veryHappyTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/veryHappyTletku.png'" />
            <img src="images/sadTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/sadTletku.png'" />
            <img src="images/madTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/madTletku.png'" />
            <img src="images/boredTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/boredTletku.png'" />
            <img src="images/surprizedTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/surprizedTletku.png'" />
            <img src="images/susTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/susTletku.png'" />
            <img src="images/confusedTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/confusedTletku.png'" />
            <img src="images/sleepTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/sleepTletku.png'" />
            <img src="images/kingTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/kingTletku.png'" />
            <img src="images/oldTletku.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/oldTletku.png'" />
            <img src="images/christmas.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/christmas.png'" />
            <img src="images/easter.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/easter.png'" />
            <img src="images/womanBirthday.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/womanBirthday.png'" />
            <img src="images/manBirthday.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/manBirthday.png'" />
            <img src="https://farleyengineeredsolutions.org/pyramid-sphinx-fes-logo-15-fes.jpg" alt="Profile Choice"
              draggable="false"
              onclick="profile = 'https://farleyengineeredsolutions.org/pyramid-sphinx-fes-logo-15-fes.jpg'" />
            <img src="images/vikenaitProductions.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'images/vikenaitProductions.png'" />
            <img src="https://iostudio.farleyengineeredsolutions.org/images/icon.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'https://iostudio.farleyengineeredsolutions.org/images/icon.png'" />
            <img src="https://camden.farleyengineeredsolutions.org/sigma.png" alt="Profile Choice" draggable="false"
              onclick="profile = 'https://camden.farleyengineeredsolutions.org/sigma.png'" />
            <img src="https://jocelyn.farleyengineeredsolutions.org/Heart_Icon.png" alt="Profile Choice"
              draggable="false" onclick="profile = 'https://jocelyn.farleyengineeredsolutions.org/Heart_Icon.png'" />
          </div><br>
          <button class="coolBtn" onclick="uploadProfile()">Upload</button><br>
          <hr><br>
          <label for="language">
            Language:
            <select name="language" id="language" class="coolBtn">
              <option>English</option>
              <option>Ланаку Бахмут</option>
              <option>Ιζα</option>
            </select>
          </label>
          <br>
          <hr><br>
          <h2>Factory Reset</h2><br>
          <button class="coolBtn" onclick="factoryReset()">Factory Reset</button><br>
        </div>
        <div class="metroContent" id="settingsAccessibility"><br>
          <h1>Accessibility</h1><br>
          <label for="textSize">
            Text Size:
            <input type="range" name="textSize" id="textSize" value="1" min="0.5" max="2" step="0.1"
              style="cursor:url('images/pointer.png'), auto ;" onchange="textSize = textSizeEl.value" />
          </label><br><br>
          <button class="coolBtn" onclick="highContrast = !highContrast">Toggle High-Contrast Text</button><br>
          <button class="coolBtn" onclick="hasKeyboardE = !hasKeyboardE">Toggle On-Screen Keyboard</button>
        </div>
        <div class="metroContent" id="settingsPersonalization"><br>
          <h1>Personalization</h1><br>
          <h2>Wallpaper</h2><br>
          <img src="#" alt="Wallpaper Preview" draggable="false" id="wallpaperPreview" /><br>
          <div id="wallpaperContainer">
            <img src="images/wallpaper.png" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper.png'" />
            <img src="images/wallpaper2.jpg" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper2.jpg'" />
            <img src="images/wallpaper3.jpg" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper3.jpg'" />
            <img src="images/wallpaper4.jpg" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper4.jpg'" />
            <img src="images/wallpaper5.jpg" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper5.jpg'" />
            <img src="images/wallpaper6.jpg" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper6.jpg'" />
            <img src="images/wallpaper7.jpg" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper7.jpg'" />
            <img src="images/wallpaper8.jpg" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper8.jpg'" />
            <img src="images/wallpaper9.jpg" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper9.jpg'" />
            <img src="images/wallpaper10.png" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper10.png'" />
              <img src="images/wallpaper11.heic" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper11.heic'" />
              <img src="images/wallpaper12.jpg" alt="Wallpaper Option" draggable="false"
              onclick="wallpaper = 'images/wallpaper12.jpg'" />
          </div><br>
          <button class="coolBtn" onclick="uploadWallpaper()">Upload</button><br>
          <hr><br>
          <h2>Theme</h2><br>
          <button class="coolBtn" onclick="theme = 'light'">Light</button>
          <button class="coolBtn negBtn" onclick="theme = 'dark'">Dark</button><br>
          <h2>Theme Color</h2><br>
          <div style="width:75% ; display:grid ; grid-template-columns: auto auto auto auto auto auto ; margin:auto ;">
            <div class="colorOption" style="background-color:red ;"
              onclick="themeColor = 'red'; hoverThemeColor = 'pink'; darkThemeColor = 'maroon'"></div>
            <div class="colorOption" style="background-color:orange ;"
              onclick="themeColor = 'orange'; hoverThemeColor = 'gold'; darkThemeColor = 'coral'"></div>
            <div class="colorOption" style="background-color:gold ;"
              onclick="themeColor = 'gold'; hoverThemeColor = 'yellow'; darkThemeColor = 'olive'"></div>
            <div class="colorOption" style="background-color:#62A362 ;"
              onclick="themeColor = '#62A362'; hoverThemeColor = '#98FF98'; darkThemeColor = '#4E824E'"></div>
            <div class="colorOption" style="background-color:green ;"
              onclick="themeColor = 'green'; hoverThemeColor = 'lime'; darkThemeColor = 'darkgreen'"></div>
            <div class="colorOption" style="background-color:teal ;"
              onclick="themeColor = 'teal'; hoverThemeColor = 'cyan'; darkThemeColor = '#005555'"></div>
            <div class="colorOption" style="background-color:blue ;"
              onclick="themeColor = 'blue'; hoverThemeColor = 'lightblue'; darkThemeColor = 'navy'"></div>
            <div class="colorOption" style="background-color:magenta ;"
              onclick="themeColor = 'magenta'; hoverThemeColor = 'pink'; darkThemeColor = 'purple'"></div>
            <div class="colorOption" style="background-color:brown ;"
              onclick="themeColor = 'brown'; hoverThemeColor = 'tan'; darkThemeColor = 'maroon'"></div>
            <div class="colorOption" style="background-color:lightgrey ;"
              onclick="themeColor = 'lightgrey'; hoverThemeColor = 'white'; darkThemeColor = 'darkgrey'"></div>
            <div class="colorOption" style="background-color:grey ;"
              onclick="themeColor = 'grey'; hoverThemeColor = 'darkgrey'; darkThemeColor = '#555555'"></div>
            <div class="colorOption" style="background-color:#555555 ;"
              onclick="themeColor = '#555555'; hoverThemeColor = 'grey'; darkThemeColor = 'black'"></div>
          </div><br>
          <h2>Window Bar Position</h2><br>
          <button class="coolBtn" onclick="windowBarPosition = 'top'">Top</button>
          <button class="coolBtn" onclick="windowBarPosition = 'left'">Left</button><br>
          <h2>Font</h2><br>
          <h3 style="cursor:url('images/pointer.png'), auto ; font-family:ubuntu ;"
            onclick="font = 'ubuntu, system-ui'">Click to Choose This Font</h3><br>
          <h3 style="cursor:url('images/pointer.png'), auto ; font-family:sans-serif ;" onclick="font = 'sans-serif'">
            Click to Choose This Font</h3><br>
          <h3 style="cursor:url('images/pointer.png'), auto ; font-family:serif ;" onclick="font = 'serif'">Click to
            Choose This Font</h3><br>
          <h3 style="cursor:url('images/pointer.png'), auto ; font-family:monospace ;" onclick="font = 'monospace'">
            Click to Choose This Font</h3><br>
          <h3 style="cursor:url('images/pointer.png'), auto ; font-family:noto mono ;" onclick="font = 'noto mono'">
            Click to Choose This Font</h3><br>
          <h3 style="cursor:url('images/pointer.png'), auto ; font-family:cantarell ;" onclick="font = 'cantarell'">
            Click to Choose This Font</h3><br>
          <h3 style="cursor:url('images/pointer.png'), auto ; font-family:montserrat ;" onclick="font = 'montserrat'">
            Click to Choose This Font</h3><br>
          <h3 style="cursor:url('images/pointer.png'), auto ; font-family:caladea ;" onclick="font = 'caladea'">Click to
            Choose This Font</h3><br>
          <h2>Folder Graphic</h2><br>
          <img src="#" alt="Folder Graphic Preview" draggable="false" id="folderGraphicPreview" /><br>
          <div id="folderGraphicContainer">
            <img src="images/folder.png" alt="Folder Graphic Option" draggable="false"
              style="width:100px ; margin:10px ; cursor:url('images/pointer.png'), auto ;"
              onclick="folderGraphic = 'images/folder.png'" />
            <img src="images/folderIcon.png" alt="Folder Graphic Option" draggable="false"
              style="width:100px ; margin:10px ; cursor:url('images/pointer.png'), auto ;"
              onclick="folderGraphic = 'images/folderIcon.png'" />
            <img src="images/folder2.png" alt="Folder Graphic Option" draggable="false"
              style="width:100px ; margin:10px ; cursor:url('images/pointer.png'), auto ;"
              onclick="folderGraphic = 'images/folder2.png'" />
            <img src="images/folder3.png" alt="Folder Graphic Option" draggable="false"
              style="width:100px ; margin:10px ; cursor:url('images/pointer.png'), auto ;"
              onclick="folderGraphic = 'images/folder3.png'" />
          </div>
          <br>
          <button class="coolBtn" onclick="uploadFolderGraphic()">Upload</button><br>
          <hr><br>
          <h2>Notification Sound</h2><br>
          <button class="coolBtn" onclick="tletkuTalkSnd.currentTime = 0; tletkuTalkSnd.play()">Test</button><br>
          <button class="coolBtn"
            onclick="tletkuTalkSnd.src = 'sounds/tletkuTalk.mp3'; tletkuTalkSnd.currentTime = 0; tletkuTalkSnd.play()">Default</button>
          <button class="coolBtn"
            onclick="tletkuTalkSnd.src = 'sounds/notification.mp3'; tletkuTalkSnd.currentTime = 0; tletkuTalkSnd.play()">Bridge</button>
          <button class="coolBtn"
            onclick="tletkuTalkSnd.src = 'sounds/notification2.mp3'; tletkuTalkSnd.currentTime = 0; tletkuTalkSnd.play()">Hello</button>
          <button class="coolBtn"
            onclick="tletkuTalkSnd.src = 'sounds/notification3.mp3'; tletkuTalkSnd.currentTime = 0; tletkuTalkSnd.play()">Chat</button>
          <button class="coolBtn"
            onclick="tletkuTalkSnd.src = 'sounds/notification4.mp3'; tletkuTalkSnd.currentTime = 0; tletkuTalkSnd.play()">Bell</button>
          <button class="coolBtn"
            onclick="tletkuTalkSnd.src = 'sounds/notification5.mp3'; tletkuTalkSnd.currentTime = 0; tletkuTalkSnd.play()">Ding</button>
          <h2>Themes</h2><br>
          <div id="themeContainer">
            <div class="theme" style="background-image:url('images/wallpaper.png') ; font-family:ubuntu ;"
              onclick="toTheme(0)">
              <div class="theme-win">
                <div class="theme-win-bar" style="background-color:green ;">
                  <p>My Favorite Ofekal Theme</p>
                </div>
                <div class="theme-win-content" style="background-color:white ;">
                  <img src="images/folder.png" alt="Folder" draggable="false" class="theme-folder" />
                  <img src="images/folder.png" alt="Folder" draggable="false" class="theme-folder" />
                  <img src="images/folder.png" alt="Folder" draggable="false" class="theme-folder" />
                </div>
              </div>
              <div class="theme-taskbar" style="background-color:green ;"></div>
            </div>
            <div class="theme" style="background-image:url('images/wallpaper6.jpg') ; font-family:verdana ;"
              onclick="toTheme(1)">
              <div class="theme-win">
                <div class="theme-win-bar" style="background-color:blue ;">
                  <p>My Favorite Ofekal Theme</p>
                </div>
                <div class="theme-win-content" style="background-color:white ;">
                  <img src="images/folder2.png" alt="Folder" draggable="false" class="theme-folder" />
                  <img src="images/folder2.png" alt="Folder" draggable="false" class="theme-folder" />
                  <img src="images/folder2.png" alt="Folder" draggable="false" class="theme-folder" />
                </div>
              </div>
              <div class="theme-taskbar" style="background-color:blue ;"></div>
            </div>
            <div class="theme" style="background-image:url('images/wallpaper8.jpg') ; font-family:monospace ;"
              onclick="toTheme(2)">
              <div class="theme-win">
                <div class="theme-win-bar" style="background-color:magenta ;">
                  <p>My Favorite Ofekal Theme</p>
                </div>
                <div class="theme-win-content" style="background-color:#222222 ;">
                  <img src="images/folder3.png" alt="Folder" draggable="false" class="theme-folder" />
                  <img src="images/folder3.png" alt="Folder" draggable="false" class="theme-folder" />
                  <img src="images/folder3.png" alt="Folder" draggable="false" class="theme-folder" />
                </div>
              </div>
              <div class="theme-taskbar" style="background-color:magenta ;"></div>
            </div>
            <div class="theme" style="background-image:url('images/wallpaper7.jpg') ; font-family:sans-serif ;"
              onclick="toTheme(3)">
              <div class="theme-win side-theme-win">
                <div class="theme-win-bar" style="background-color:orange ;"></div>
                <div class="theme-win-content" style="background-color:#222222 ;">
                  <img src="images/folder.png" alt="Folder" draggable="false" class="theme-folder" />
                  <img src="images/folder.png" alt="Folder" draggable="false" class="theme-folder" />
                  <img src="images/folder.png" alt="Folder" draggable="false" class="theme-folder" />
                </div>
              </div>
              <div class="theme-taskbar" style="background-color:orange ;">
                <p>My Favorite Ofekal Theme</p>
              </div>
            </div>
          </div><br>
          <button class="coolBtn" onclick="saveTheme()">Save Theme</button><br>
          <button class="coolBtn" onclick="randomTheme()">Random Theme</button><br>
        </div>
        <div class="metroContent" id="settingsStorageDetails"><br>
          <h1>Storage</h1><br>
          <div id="detailedStorageBar">
            <div class="storageUser" id="baseOSUsage"></div>
            <div class="storageUser" id="appUsage"></div>
            <div class="storageUser" id="fileUsage"></div>
            <div class="storageUser" id="junkUsage"></div>
          </div><br>
          <ul style="text-align:left ; margin-left:250px ; font-size:1.5rem ;">
            <li><span style="color:green ;"><strong>Base OS</strong></span> - <span id="osUsageStat"></span> MB</li>
            <li><span style="color:teal ;"><strong>Applications</strong></span> - <span id="appUsageStat"></span> MB</li>
            <li><span style="color:lightyellow ; -webkit-text-stroke: 1px black ;"><strong>Files</strong></span> - <span
                id="fileUsageStat"></span> MB</li>
            <li><span style="color:lightgrey ; -webkit-text-stroke: 1px black ;"><strong>Junk</strong></span> - <span
                id="junkUsageStat"></span> MB</li>
          </ul><br>
          <button class="coolBtn" onclick="junkUsage = 0">Clear Junk</button><br>
          <p>Total Disk Space: 100 MB</p><br>
          <p>Used Disk Space: <span id="usedStorageStat"></span> MB</p><br>
          <p>Remaining Disk Space: <span id="remainingStorageStat"></span> MB</p><br>
          <button class="coolBtn" onclick="toSettingsStorage()">Back</button>
        </div>
        <div class="metroContent" id="settingsStorage"><br>
          <h1>Storage</h1><br>
          <div id="storageBar">
            <div id="storage"></div>
          </div><br>
          <p><span id="usedStorage"></span> MB out of 100 MB have been used.</p>
          <button class="coolBtn" onclick="toStorageDetails()">Details</button>
        </div>
        <div class="metroContent" id="settingsNetworkAndInternet"><br>
          <h1>Network and Internet</h1><br>
          <div id="wifiList"></div>
        </div>
        <div class="metroContent" id="settingsHome"><br>
          <h1>Home</h1><br>
          <div id="settingsSectionContainer">
            <div class="settingsSection" onclick="toSettingsNetworkAndInternet()">
              <img src="images/wifi.png" alt="Network and Internet" draggable="false" />
              <h2>Network and Internet</h2>
            </div>
            <div class="settingsSection" onclick="toSettingsStorage()">
              <img src="images/folder.png" alt="Storage" draggable="false" />
              <h2>Storage</h2>
            </div>
            <div class="settingsSection" onclick="toSettingsPersonalization()">
              <img src="images/personalization.png" alt="Personalization" draggable="false" />
              <h2>Personalization</h2>
            </div>
            <div class="settingsSection" onclick="toSettingsAccessibility()">
              <img src="images/oldTletku.png" alt="Accessibility" draggable="false" />
              <h2>Accessibility</h2>
            </div>
            <div class="settingsSection" onclick="toSettingsAdministratorSettings()">
              <img src="images/kingTletku.png" alt="Administrator Settings" draggable="false" />
              <h2>Admin Settings</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clockPopup" id="newAlarmPopup">
      <div style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:center ;">
        <h1>New Alarm</h1>
      </div>
      <div class="clockCustomizationContainer">
        <div class="clockCustomizationBox">
          <h1 id="newAlarmHour"></h1>
          <div
            style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:space-evenly ; font-size:2rem ;">
            <p class="addBtn" onclick="newAlarmHour++">+</p>
            <p class="subBtn" onclick="newAlarmHour--">-</p>
          </div>
        </div>
        <div class="clockCustomizationBox">
          <h1 id="newAlarmMinute"></h1>
          <div
            style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:space-evenly ; font-size:2rem ;">
            <p class="addBtn" onclick="newAlarmMinute++">+</p>
            <p class="subBtn" onclick="newAlarmMinute--">-</p>
          </div>
        </div>
        <div class="clockCustomizationBox">
          <h1 id="newAlarmAMPM"></h1>
          <div
            style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:space-evenly ; font-size:2rem ;">
            <button class="coolBtn" onclick="toggleNewAlarmAMPM()" style="padding:10px ;">Toggle</button>
          </div>
        </div>
      </div>
      <div style="width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelNewAlarm()">Cancel</button>
        <input type="text" placeholder="Alarm text..." class="coolInput" id="alarmTextInput" />
        <button class="coolBtn" onclick="okNewAlarm()">OK</button>
      </div>
    </div>
    <div class="clockPopup" id="newTimerPopup">
      <div style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:center ;">
        <h1>New Timer</h1>
      </div>
      <div class="clockCustomizationContainer">
        <div class="clockCustomizationBox">
          <h1 id="newTimerHours"></h1>
          <div
            style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:space-evenly ; font-size:2rem ;">
            <p class="addBtn" onclick="newTimerHours++">+</p>
            <p class="subBtn" onclick="newTimerHours--">-</p>
          </div>
        </div>
        <div class="clockCustomizationBox">
          <h1 id="newTimerMinutes"></h1>
          <div
            style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:space-evenly ; font-size:2rem ;">
            <p class="addBtn" onclick="newTimerMinutes++">+</p>
            <p class="subBtn" onclick="newTimerMinutes--">-</p>
          </div>
        </div>
        <div class="clockCustomizationBox">
          <h1 id="newTimerSeconds"></h1>
          <div
            style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:space-evenly ; font-size:2rem ;">
            <p class="addBtn" onclick="newTimerSeconds++">+</p>
            <p class="subBtn" onclick="newTimerSeconds--">-</p>
          </div>
        </div>
      </div>
      <div style="width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:space-evenly ;">
        <button class="coolBtn negBtn" onclick="cancelNewTimer()">Cancel</button>
        <button class="coolBtn" onclick="okNewTimer()">OK</button>
      </div>
    </div>
    <div class="clock" id="clockWidget" onclick="openClock()">
      <h2 class="clockNum" style="margin-left:calc(50% - 8px - 30px) ; margin-top:-10px ;">12</h2>
      <h2 class="clockNum" style="margin-left:calc(100% - 8px - 30px) ; margin-top:calc(50% - 8px - 30px) ;">3</h2>
      <h2 class="clockNum" style="margin-left:calc(50% - 8px - 25px) ; margin-top:calc(100% - 8px - 40px) ;">6</h2>
      <h2 class="clockNum" style="margin-left:calc(8px - 20px) ; margin-top:calc(50% - 8px - 30px) ;">9</h2>
      <div class="clock-face">
        <div class="hand hour-hand" id="hour-hand"></div>
        <div class="hand minute-hand" id="minute-hand"></div>
        <div class="hand second-hand" id="second-hand"></div>
      </div>
    </div>
    <div class="window" id="clockApp" onmousedown="selectWin(clockAppEl)">
      <div class="windowBar">
        <div class="draggableArea" id="clockBar">
          <h2 class="windowTitle">Clock</h2>
          <img src="images/clock.png" alt="Icon" draggable="false" class="windowIcon" />
        </div>
        <div class="windowActionButtons">
          <button class="infoBtn" onclick="getHelp('clock')">?</button>
          <button class="minimizeBtn" onclick="minimizeClock()">-</button>
          <button class="maximizeBtn" onclick="maximizeClock()"><i class="fa-regular fa-square"></i></button>
          <button class="closeBtn" onclick="closeClock()">X</button>
        </div>
      </div>
      <div class="windowContent metroUI" id="clockContent">
        <div class="metroSidebar">
          <br>
          <h2>Clock</h2>
          <p onclick="toClockHome()">Home</p>
          <p onclick="toClockTimer()">Timer</p>
          <p onclick="toClockStopwatch()">Stopwatch</p>
          <p onclick="toClockAlarm()">Alarm</p>
        </div>
        <div class="metroContent" id="clockAlarm"><br>
          <h1>Alarm</h1><br>
          <p>Alarms only sound when this tab on your browser is active.</p>
          <button class="coolBtn" onclick="newAlarm()">New Alarm</button>
          <div id="alarmContainer"></div>
        </div>
        <div class="metroContent" id="clockStopwatch"><br>
          <h1>Stopwatch</h1><br>
          <h1 id="stopwatch"></h1>
          <button class="coolBtn" onclick="resetStopwatch()">Reset</button>
          <button class="coolBtn" onclick="startStopwatch()" id="startStopwatchBtn">Start</button>
          <button class="coolBtn" onclick="lapStopwatch()">Lap</button><br>
          <div id="lapContainer"></div>
        </div>
        <div class="metroContent" id="clockTimer"><br>
          <h1>Timer</h1><br>
          <p>Timers only sound when this tab on your browser is active.</p>
          <button class="coolBtn" onclick="newTimer()">New Timer</button>
          <div id="timerContainer"></div>
        </div>
        <div class="metroContent" id="clockHome">
          <br>
          <h1>Home</h1><br><br>
          <div class="clock">
            <h2 class="clockNum" style="margin-left:calc(50% - 8px - 30px) ; margin-top:-10px ;">12</h2>
            <h2 class="clockNum" style="margin-left:calc(100% - 8px - 30px) ; margin-top:calc(50% - 8px - 30px) ;">3
            </h2>
            <h2 class="clockNum" style="margin-left:calc(50% - 8px - 25px) ; margin-top:calc(100% - 8px - 40px) ;">6
            </h2>
            <h2 class="clockNum" style="margin-left:calc(8px - 20px) ; margin-top:calc(50% - 8px - 30px) ;">9</h2>
            <div class="clock-face">
              <div class="hand hour-hand" id="hour-hand"></div>
              <div class="hand minute-hand" id="minute-hand"></div>
              <div class="hand second-hand" id="second-hand"></div>
            </div>
          </div> <br>
          <p><span style="color:maroon ;">Hour Hand</span> <span style="color:gold ;">Minute Hand</span> <span
              style="color:navy ;">Second Hand</span></p><br>
          <p id="detailedClock"></p>
          <button class="coolBtn" onclick="toggleClockWidget()" id="toggleClockWidgetBtn">Add Clock Widget to
            Desktop</button>
        </div>
      </div>
    </div>
    <div class="window" id="calculator" onmousedown="selectWin(calculatorEl)">
      <div class="windowBar">
        <div class="draggableArea" id="calculatorBar" style="width:calc(100% - 140px)">
          <h2 class="windowTitle">Calculator</h2>
          <img src="images/calculator.png" alt="Icon" draggable="false" class="windowIcon" />
        </div>
        <div class="windowActionButtons" style="width:140px ;" id="calculatorWAB">
          <button class="infoBtn" onclick="getHelp('calculator')">?</button>
          <button class="minimizeBtn" onclick="minimizeCalculator()">-</button>
          <button class="closeBtn" onclick="closeCalculator()">X</button>
        </div>
      </div>
      <div class="windowContent" id="calculatorContent">
        <div id="history"><br>
          <h2>History</h2>
          <h3 onclick="calculator.history = []; historyVekEl.innerHTML = ''">Clear</h3>
          <div id="historyVek"></div>
        </div>
        <div style="width:100% ; height:50px ; display:flex ; align-items:center ; justify-content:space-between ;">
          <img src="images/calculator.png" alt="Ofekal Naudnik Calculator" draggable="false"
            style="height:90% ; margin-left:10px ;" />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p style="color:green ;">History ></p>
          <img src="images/menu.png" alt="History" draggable="false"
            style="height:90% ; margin-right:10px ; cursor:url('images/pointer.png'), auto ;"
            onclick="toggleHistory()" />
        </div>
        <div id="math"></div>
        <div id="keypad">
          <button onclick="math += '1'">1</button>
          <button onclick="math += '2'">2</button>
          <button onclick="math += '3'">3</button>
          <button onclick="math += '4'">4</button>
          <button onclick="math += '5'">5</button>
          <button onclick="math += '6'">6</button>
          <button onclick="math += '7'">7</button>
          <button onclick="math += '8'">8</button>
          <button onclick="math += '9'">9</button>
          <button onclick="math += '+'">+</button>
          <button onclick="math += '0'">0</button>
          <button onclick="math += '-'">-</button>
          <button onclick="math += '*'">*</button>
          <button onclick="math += '/'">/</button>
          <button onclick="math = Math.sqrt(Number(math))">SQRT</button>
          <button id="ccbtn" onclick="math = ''">CL</button>
          <button onclick="math += '.'">.</button>
          <button id="cebtn" onclick="calculate()">=</button>
        </div>
      </div>
    </div>
    <div class="window" id="ioMail" onmousedown="selectWin(ioMailEl)">
      <div class="windowBar">
        <div class="draggableArea" id="ioMailBar">
          <h2 class="windowTitle">IO Posts</h2>
          <img src="https://ioposts.farleyengineeredsolutions.com/icon.png" alt="Icon" draggable="false"
            class="windowIcon" />
        </div>
        <div class="windowActionButtons">
          <button class="infoBtn" onclick="getHelp('io mail')">?</button>
          <button class="minimizeBtn" onclick="minimizeIOMail()">-</button>
          <button class="maximizeBtn" onclick="maximizeIOMail()"><i class="fa-regular fa-square"></i></button>
          <button class="closeBtn" onclick="closeIOMail()">X</button>
        </div>
      </div>
      <iframe class="windowContent" id="ioMailContent"
        src="https://ioposts.farleyengineeredsolutions.com/index.php"></iframe>
      <div class="windowContent noInternetScreen">
        <img src="images/noWifi.png" alt="No Internet" draggable="false" />
        <h2>No Internet</h2>
        <button class="coolBtn" onclick="openSettings(); toSettingsNetworkAndInternet()">Connect to the
          Internet</button>
      </div>
    </div>
    <div id="clipboard"></div>
    <div class="popup" id="wifiPasswordPopup">
      <h1>Information Needed</h1><br>
      <p>This hotspot requires a password.</p>
      <input type="text" placeholder="Wifi password here..." class="coolInput" id="wifiPasswordInput" /><br><br>
      <p id="wifiIncorrectPassword">Incorrect Password</p>
      <button class="coolBtn negBtn" onclick="cancelWifi()">Cancel</button>
      <button class="coolBtn" onclick="okWifi()">OK</button>
    </div>
    <div class="window" id="setup" onmousedown="selectWin(setupEl)">
      <div class="windowBar">
        <div class="draggableArea" id="setupBar" style="width:calc(100% - 100px) ;">
          <h2 class="windowTitle">Ofekal Naudnik Setup</h2>
          <img src="images/icon.png" alt="Icon" draggable="false" class="windowIcon" />
        </div>
        <div class="windowActionButtons" style="width:100px ;" id="setupWAB">
          <button class="minimizeBtn" onclick="minimizeSetup()">-</button>
          <button class="maximizeBtn" onclick="maximizeSetup()"><i class="fa-regular fa-square"></i></button>
        </div>
      </div>
      <div class="windowContent" id="setupContent">
      <?php
        if (isset($_SESSION["username"])){
          echo "<div class='setupStage' id='ssOne'>
          <h1>Hello There!</h1>
          <img src='images/happyTletku.png' alt='Welcome Tletku' draggable='false' />
          <p>Welcome Back, ". $_SESSION["username"] ."!</p>
          <div style='width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:right ;'>
            <button class='coolBtn' style='margin-right:25px ;' onclick='toSSTwo()'>Redo Setup ></button>
            <button class='coolBtn' style='margin-right:25px ;' onclick='closeSetup(); setupE = true'>Let's go! ></button>
          </div>
        </div>";
        } else {
          echo "<div class='setupStage' id='ssOne'>
          <h1>Hello There!</h1>
          <img src='images/happyTletku.png' alt='Welcome Tletku' draggable='false' />
          <p>Welcome to Ofekal Naudnik!</p>
          <div style='width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:right ;'>
            <button class='coolBtn' style='margin-right:25px ;' onclick='createAccount()'>Create Account / Log In ></button>
            <button class='coolBtn' style='margin-right:25px ;' onclick='toSSTwo()'>Continue as Guest ></button>
          </div>
        </div>";
        }
      ?>
        <div class="setupStage" id="ssTwo">
          <h1>Which Language do you Speak?</h1>
          <img src="images/confusedTletku.png" alt="Welcome Tletku" draggable="false" />
          <select class="coolBtn">
            <option>English</option>
            <option>Ланаку Бахмут</option>
            <option>Ιζα</option>
          </select>
          <div style="width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:space-between ;">
            <button class="coolBtn" style="margin-right:25px ;" onclick="toSSOne()">
              < Previous</button>
                <button class="coolBtn" style="margin-right:25px ;" onclick="toSSThree()">Next ></button>
          </div>
        </div>
        <div class="setupStage" id="ssThree">
          <h1>What is your Nearest Major City?</h1>
          <img src="images/confusedTletku.png" alt="Welcome Tletku" draggable="false" />
          <p>We need this to give you weather data, but you may skip if you wish to keep this private.</p>
          <input type="text" placeholder="Please type here..." class="coolInput" id="setupLocation" />
          <div style="width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:space-between ;">
            <button class="coolBtn" style="margin-right:25px ;" onclick="toSSTwo()">
              < Previous</button>
                <button class="coolBtn" style="margin-right:25px ;" onclick="toSSFour()">Skip</button>
                <button class="coolBtn" style="margin-right:25px ;"
                  onclick="toSSFour(); weatherEnabled = true; locationSe = setupLocationEl.value; fetchWeather(locationSe)">Next
                  ></button>
          </div>
        </div>
        <div class="setupStage" id="ssFour">
          <h1>Connect to the Internet</h1>
          <img src="images/susTletku.png" alt="Welcome Tletku" draggable="false" />
          <p>This is optional.</p><br>
          <div id="setupHotspots"></div>
          <div style="width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:space-between ;">
            <button class="coolBtn" style="margin-right:25px ;" onclick="toSSThree()">
              < Previous</button>
                <button class="coolBtn" style="margin-right:25px ;" onclick="toSSFive()">Skip</button>
                <button class="coolBtn" style="margin-right:25px ;" onclick="toSSFive()">Next ></button>
          </div>
        </div>
        <div class="setupStage" id="ssFive">
          <h1>Give Yourself a Username</h1>
          <img src="images/veryHappyTletku.png" alt="Welcome Tletku" draggable="false" />
          <p>Do not make this your real name. You can always change your username later in settings.</p><br>
          <input type="text" placeholder="Type here..." class="coolInput" id="setupUsernameInput" value="<?php if (isset($_SESSION["username"])) { echo $_SESSION["username"]; } ?>" />
          <div style="width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:space-between ;">
            <button class="coolBtn" style="margin-right:25px ;" onclick="toSSFour()">
              < Previous</button>
                <button class="coolBtn" style="margin-right:25px ;"
                  onclick="username = setupUsernameInputEl.value; usernameInputEl.value = username; if (username == '') { username = 'User'; usernameInputEl.value = '' } toSSSix()">Next
                  ></button>
          </div>
        </div>
        <div class="setupStage" id="ssSix">
          <h1>Device Security</h1>
          <img src="images/susTletku.png" alt="Welcome Tletku" draggable="false" />
          <p>This is optional. If you leave the text field empty, the lock will remain swipe-to-continue.</p><br>
          <input type="password" placeholder="Password..." class="coolInput" id="setupPasswordInput" value="<?php if (isset($_SESSION["username"])) { echo getPassword($_SESSION["username"]); } ?>" />
          <div style="width:100% ; height:100px ; display:flex ; align-items:center ; justify-content:space-between ;">
            <button class="coolBtn" style="margin-right:25px ;" onclick="toSSFive()">
              < Previous</button>
                <button class="coolBtn" style="margin-right:25px ;"
                  onclick="password = setupPasswordInputEl.value; passwordInputEl.value = password; toSSSeven()">Next
                  ></button>
          </div>
        </div>
        <div class="setupStage" id="ssSeven">
          <h1>Almost Done!</h1><br>
          <p>Please wait while we are getting things ready for you.</p><br>
          <img src="images/load.gif" alt="Loading Wheel" draggable="false" style="margin:10px ;" />
        </div>
        <div class="setupStage" id="ssEight">
          <h1>You Are All Set!</h1><br>
          <img src="images/happyTletku.png" alt="Welcome Tletku" draggable="false" />
          <p>Please enjoy Ofekal Naudnik!</p><br>
          <button class="coolBtn" onclick="openPrism()">Explore the Browser</button><br>
          <button class="coolBtn" onclick="openSettings(); toSettingsPersonalization()">Personalize Ofekal
            OS</button><br>
            <button class="coolBtn" onclick="openToolbox()">Install Extra Software</button><br>
          <button class="coolBtn" onclick="closeSetup(); setupE = true">End Setup</button>
        </div>
      </div>
    </div>
    <div class="popup" id="newDirectoryPopup">
      <h1>Information Needed</h1><br>
      <input type="text" placeholder="New Folder Name..." class="coolInput" id="newDirectoryNameInput" /><br><br>
      <button class="coolBtn negBtn" onclick="cancelNewDirectory()">Cancel</button>
      <button class="coolBtn" onclick="okNewDirectory()">OK</button>
    </div>
    <div class="popup" id="renameFolderPopup">
      <h1>Information Needed</h1><br>
      <input type="text" placeholder="New Folder Name..." class="coolInput" id="newFolderNameInput" /><br><br>
      <button class="coolBtn negBtn" onclick="cancelRenameFolder()">Cancel</button>
      <button class="coolBtn" onclick="okRenameFolder()">OK</button>
    </div>
    <div class="popup" id="deleteFolderPopup">
      <h1>Attention!</h1><br>
      <p>Are you sure to delete this folder?</p><br>
      <button class="coolBtn negBtn" onclick="cancelDeleteFolder()">Cancel</button>
      <button class="coolBtn" onclick="okDeleteFolder()">OK</button>
    </div>
    <div class="window" id="folderWin" onmousedown="selectWin(folderWinEl)">
      <div class="windowBar">
        <div class="draggableArea" id="folderBar">
          <h2 id="winFolderName" class="windowTitle">Folder</h2>
          <img src="images/folder.png" alt="Icon" draggable="false" class="windowIcon" />
        </div>
        <div class="windowActionButtons">
          <button class="infoBtn" onclick="getHelp('storage')">?</button>
          <button class="minimizeBtn" onclick="minimizeFolder()">-</button>
          <button class="maximizeBtn" onclick="maximizeFolder()"><i class="fa-regular fa-square"></i></button>
          <button class="closeBtn" onclick="closeFolder()">X</button>
        </div>
      </div>
      <div class="windowContent" id="folderContent">
        <div id="folderBarVek">
          <img src="images/toParentDir.png" alt="Go to Parent Folder" title="Go to Parent Folder"
            onclick="toParentDir()" draggable="false" id="goToParentDirBtn" />
          <img src="images/newFolderIcon.png" alt="New Folder" title="New Folder" onclick="newDirectory()"
            draggable="false" />
          <img src="images/renameFolder.png" alt="Rename Folder" title="Rename Folder" onclick="renameFolder()"
            draggable="false" id="renameFolderBtn" />
          <img src="images/deleteFolder.png" alt="Delete Folder" title="Delete Folder" onclick="deleteFolder()"
            draggable="false" id="deleteFolderBtn" />
            <img src="images/openInTerminal.png" alt="Open in Terminal" title="Open in Terminal" onclick="openInTerminal()"
            draggable="false" />
        </div>
        <div id="folderContentVek"></div>
      </div>
    </div>
    <div id="newFolderNameContainer">
      <input type="text" placeholder="New Folder Name..." id="newFolderName" />
      <button onclick="newFolder()"><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
    </div>
    <div class="desktopIcon" id="codeWithMeIcon" onclick="codeWithTletkuFun()">
      <img src="images/codeWithTletku.png" alt="Code with Tletku" draggable="false" />
      <p>Code with Tletku</p>
    </div>
    <div id="speechBubble">
      <h1 id="tletkuGreeting"></h1><br>
      <p id="tletkuMessage"></p>
      <div id="twoBtns">
        <button class="coolBtn" onclick="yesToDecision()">Yes</button>
        <button class="coolBtn negBtn" onclick="noToDecision()">No</button>
      </div>
    </div>
    <div id="helpBar">
      <button id="closeHelp" onclick="closeHelp()">X</button>
      <h1 id="helpHeading"></h1><br>
      <div id="helpDesc"></div><br><br><br><br><br>
    </div>
    <div class="popup" id="weatherPopup">
      <h1>Information Needed</h1><br>
      <p>We need this information so we can give you weather data from your area.</p><br>
      <input type="text" placeholder="Your Nearest Major City..." class="coolInput" id="locationInput" /><br><br>
      <button class="coolBtn negBtn" onclick="cancelWeather()">Cancel</button>
      <button class="coolBtn" onclick="okWeather()">OK</button>
    </div>
    <div class="window" id="prism" onmousedown="selectWin(prismEl)">
      <div class="windowBar">
        <div class="draggableArea" id="prismBar">
          <h2 class="windowTitle">Auka Web Browser</h2>
          <img src="images/auka.png" alt="Icon" draggable="false"
            class="windowIcon" />
        </div>
        <div class="windowActionButtons">
          <button class="infoBtn" onclick="getHelp('prism')">?</button>
          <button class="minimizeBtn" onclick="minimizePrism()">-</button>
          <button class="maximizeBtn" onclick="maximizePrism()"><i class="fa-regular fa-square"></i></button>
          <button class="closeBtn" onclick="closePrism()">X</button>
        </div>
      </div>
      <div class="windowContent" id="prismContent" style="overflow:hidden ;">
        <div id="aukaBar">
          <div style="width:200px ; height:100% ; display:flex ; align-items:center ; justify-content:space-evenly ; background-color:green ;">
            <img src="images/auka.png" alt="Auka Logo" draggable="false" style="height:100% ;">
            <h3 style="margin-left:10px ;">Auka Web Browser</h3>
          </div>
          <div id="tabBar"></div>
          <h1 id="newTabBtn" onclick="newTab()">+</h1>
        </div>
        <iframe src="auka.html" frameborder="0" id="aukaContent"></iframe>
      </div>
      <div class="windowContent noInternetScreen">
        <img src="images/noWifi.png" alt="No Internet" draggable="false" />
        <h2>No Internet</h2>
        <button class="coolBtn" onclick="openSettings(); toSettingsNetworkAndInternet()">Connect to the
          Internet</button>
        <button class="coolBtn" onclick="askPrismE = !askPrismE">Toggle AskPrism Widget</button>
      </div>
    </div>
    <input type="search" id="searchBar" placeholder="Search..." />
    <div id="powerOffOptions">
      <i class="fa-solid fa-arrow-rotate-right coolLink" title="Restart" onclick="restart()"></i>
      <i class="fa-solid fa-power-off coolLink" title="Power Off" onclick="powerOff()"></i>
      <i class="fa-solid fa-arrow-right-from-bracket coolLink" title="Log Out" onclick="logOut()"></i>
    </div>
    <div id="startMenu">
      <div id="startSideBar">
        <div id="userData">
          <img src="#" alt="Profile" draggable="false" id="profile" />
          <h2 id="username">User</h2>
        </div>
        <div id="notificationHistory"></div>
        <div id="charms">
          <img src="images/powerOff.png" alt="Toggle Power Options" title="Toggle Power Options"
            onclick="togglePowerOptions()" />
          <i class="fa-solid fa-magnifying-glass coolLink" style="font-size:2.5rem ;" title="Search"
            onclick="toggleSearch()"></i>
          <img src="images/newFolderIcon.png" alt="Create New Folder" title="Create New Folder"
            onclick="toggleNewFolder()" />
        </div>
      </div>
      <div id="applications"></div>
      <div id="whatsNew"><br>
        <img src="images/icon.png" alt="Todays Graphic" id="todaysGraphic" draggable="false" />
        <h2 id="greeting"></h2><br>
        <p>Did you know? Right click Tletku in the taskbar for him to speak.</p>
        <br>
        <hr><br>
        <h1>Weather</h1><br>
        <div id="weatherNoInternetScreen">
          <img src="images/noWifi.png" alt="No Internet Connection" draggable="false" />
          <h2>No Internet Connection</h2>
          <button class="coolBtn"
            onclick="openSettings(); toSettingsNetworkAndInternet(); toggleStartMenu(); if (!settings.maximized) { maximizeSettings() }">Connect
            to the Internet</button>
        </div>
        <button class="coolBtn" onclick="enableWeather()" id="enableWeatherBtn">Click to Enable Weather</button><br>
        <div id="weather"><br>
          <img src="#" alt="Weather" id="weatherGraphic" draggable="false" />
          <h2 id="locationOk"></h2><br>
          <h3 id="weatherDesc"></h3><br>
          <h4>Temperature: <span id="temperature"></span>&deg; F</h4><br>
          <button class="coolBtn" onclick="enableWeather()">Change Location</button>
          <p>Powered by <span class="coolLink" onclick="linkTo('open weather')"
              style="text-decoration: underline 1px solid white ;">OpenWeather</span></p>
        </div>
        <br>
        <hr><br>
        <h1>Bible Verse of the Day</h1><br>
        <p><strong><em>"<span id="verse"></span>"</em></strong></p><br>
        <h3 id="verseSource"></h3>
        <br>
        <hr><br>
        <fieldset>
          <legend>What's New?</legend>
          <h4><strong><em>Ofekal Naudnik V<span class="version"></span></em></strong></h4><br>
          <ul>
            <li>You now have to create accounts with my approval.</li>
            <li>The 100GB limit was reduced to 100MB due to limited server space.</li>
            <li>New mystery apps coming soon to Ofekal! We are working to bring them to you.</li>
            <li>A new BSOD with the ability to delete and back up old files so you can go back to using Ofekal.</li>
            <li>Other various bug fixes.</li>
          </ul>
        </fieldset>
        <br>
        <hr><br>
        <h1>Need Help? Have Suggestions?</h1>
        <button
            class="coolBtn" onclick="window.open('contactForm.html', '_blank')">Contact Us</button>
        <br>
          <h5>Credit to <a target="_blank" href="https://iostudio.farleyengineeredsolutions.org" class="link" style="color:yellow ; cursor:url('images/pointer.png'), auto ;">IO Studio</a> creator of <a href="https://isaacio.farleyengineeredsolutions.org/posts" style="color:yellow ; cursor:url('images/pointer.png'), auto ;" target="_blank">IO Posts</a> for helping me with PHP!</h5>
        <br>
      </div>
    </div>
    <div id="selection"></div>
    <div id="volumeContainer">
      <i class="fa-solid fa-volume-high"></i>
      <div id="volumeBar">
        <div id="volume"></div>
      </div>
    </div>
    <nav>
      <img src="images/icon.png" alt="Start" id="startBtn" onmouseover="hoverTletkuE = true"
        onmouseleave="hoverTletkuE = false" onclick="toggleStartMenu()" draggable="false"
        oncontextmenu="interactTletku()" />
      <div id="tasks">
        <div class="task" onclick="unMinimizePrism()" id="prismTask" oncontextmenu="closePrism()">
          <img src="images/auka.png" alt="Auka Web Browser"
            draggable="false" />
          <p>Auka Web Browser</p>
        </div>
        <div class="task" onclick="unMinimizeFolder()" id="storageTask" oncontextmenu="closeFolder()">
          <img src="images/folder.png" alt="Storage" draggable="false" />
          <p>Storage</p>
        </div>
        <div class="task" onclick="unMinimizeSetup()" id="setupTask" oncontextmenu="closeSetup()">
          <img src="images/icon.png" alt="Ofekal Naudnik Setup" draggable="false" />
          <p>Ofekal Naudnik Setup</p>
        </div>
        <div class="task" onclick="unMinimizeIOMail()" id="ioMailTask" oncontextmenu="closeIOMail()">
          <img src="https://ioposts.farleyengineeredsolutions.com/icon.png" alt="IO Mail"
            draggable="false" />
          <p>IO Posts</p>
        </div>
        <div class="task" onclick="unMinimizeCalculator()" id="calculatorTask" oncontextmenu="closeCalculator()">
          <img src="images/calculator.png" alt="Calculator" draggable="false" />
          <p>Calculator</p>
        </div>
        <div class="task" onclick="unMinimizeClock()" id="clockTask" oncontextmenu="closeClock()">
          <img src="images/clock.png" alt="Clock" draggable="false" />
          <p>Clock</p>
        </div>
        <div class="task" onclick="unMinimizeSettings()" id="settingsTask" oncontextmenu="closeSettings()">
          <img src="images/settings.png" alt="Settings" draggable="false" />
          <p>Settings</p>
        </div>
        <div class="task" onclick="unMinimizeNotepad()" id="notepadTask" oncontextmenu="closeNotepad()">
          <img src="images/notepad.png" alt="Notepad" draggable="false" />
          <p>Notepad</p>
        </div>
        <div class="task" onclick="unMinimizePaint()" id="paintTask" oncontextmenu="closePaint()">
          <img src="images/paint.png" alt="Paint" draggable="false" />
          <p>Paint</p>
        </div>
        <div class="task" onclick="unMinimizeMedia()" id="mediaTask" oncontextmenu="closeMedia()">
          <img src="images/media.png" alt="Media" draggable="false" />
          <p>Media Viewer</p>
        </div>
        <div class="task" onclick="unMinimizeToolbox()" id="toolboxTask" oncontextmenu="closeToolbox()">
          <img src="images/toolbox.png" alt="Toolbox" draggable="false" />
          <p>Toolbox</p>
        </div>
        <div class="task" onclick="unMinimizeTerminal()" id="terminalTask" oncontextmenu="closeTerminal()">
          <img src="images/terminal.png" alt="Terminal" draggable="false" />
          <p>Terminal</p>
        </div>
      </div>
      <div id="info">
        <div style="width:100% ; height:50% ; display:flex ; align-items:center ; justify-content:space-evenly ;">
          <img src="images/noWifi.png" alt="Internet Connection Status" title="No Internet Connection" draggable="false"
            id="internet" onclick="openSettings(); toSettingsNetworkAndInternet()"
            style="cursor:url('images/pointer.png'), auto ;" />
            <img src="images/keyboard.png" alt="On-Screen Keyboard" title="Toggle On-Screen Keyboard" draggable="false"
            style="cursor:url('images/pointer.png'), auto ; width:32px ;" onclick="toggleKeyboard()" id="keyboardBtn" />
          <img src="images/clipboard.png" alt="Clipboard" title="View Clipboard" draggable="false"
            style="cursor:url('images/pointer.png'), auto ; width:16px ;" onclick="toggleClipboard()" />
            <?php 
              if (isset($_SESSION["username"])){
                echo "
                          <img src='images/logOut.png' alt='Log Out' title='Log Out' draggable='false'
            style='cursor:url(images/pointer.png), auto ; width:16px ;' onclick='logOutOfAccount()' />
                ";
              }
            ?>
          </div>
        <div style="width:100% ; height:50% ; display:flex ; align-items:center ; justify-content:space-evenly ;">
          <p id="clock" style="cursor:url('images/pointer.png'), auto ;" onclick="openClock()"></p>
        </div>
      </div>
    </nav>
  </div>
  <div class="screen"></div>
  <div class="screen" id="bsod">
    <img src="images/sadTletku.png" alt="If you see me, something is wrong!" draggable="false" style="width:200px ;" />
    <h1>Whoops!</h1>
    <div id="bsodFileReader">
      <h4>It looks like your account has exceeded its storage limit. Please choose old or unwanted files to erase from the server and back up to your device.</h4>
      <div id="bsodFileReaderContent"></div>
      <div id="bsodFileReaderBtns">
        <button class="coolBtn" id="bsodBtn" onclick="dwDevice(bsodO); bsodO = null;">Back Up & Erase</button>
        <button class="coolBtn" onclick="restart()">OK</button>
      </div>
    </div>
  </div>
  <div class="screen" id="offScreen">
    <canvas id="offCanvas"></canvas>
  </div>
  <audio src="sounds/startup.mp3" id="startupSnd"></audio>
  <audio src="sounds/beep.mp3" id="beepSnd"></audio>
  <audio src="sounds/open.mp3" id="openSnd"></audio>
  <audio src="sounds/close.mp3" id="closeSnd"></audio>
  <audio src="sounds/tletkuTalk.mp3" id="tletkuTalkSnd"></audio>
  <audio src="sounds/error.mp3" id="errorSnd"></audio>
  <audio src="sounds/click.mp3" id="clickSnd"></audio>
  <audio src="sounds/yesCode.mp3" id="yesCodeSnd"></audio>
  <audio src="sounds/noCode.ogg" id="noCodeSnd"></audio>
  <script src="app.js"></script>
</body>
</html>

<?php

if (isset($_SESSION["username"])){
  echo "<script>loggedIn = true; if (loggedIn) {
  username = usernameInputEl.value; if (username == '') { username = 'User' };
  password = passwordInputEl.value;
  profile = '". getProfilePicture($_SESSION["username"]) ."';
  theme = '".getTheme($_SESSION["username"])."';
  themeColor = '".getThemeColor($_SESSION["username"])."';
  hoverThemeColor = '".getLightThemeColor($_SESSION["username"])."';
  darkThemeColor = '".getDarkThemeColor($_SESSION["username"])."';
  windowBarPosition = '".getWindowBarPosition($_SESSION["username"])."';
  font = '".getFont($_SESSION["username"])."';
  folderGraphic = '".getFolderGraphic($_SESSION["username"])."';
  tletkuTalkSnd.src = '".getNotification($_SESSION["username"])."';
  navFloatE = ".getNavFloatE($_SESSION["username"]).";
  navInvisibleE = ".getNavInvisibleE($_SESSION["username"]).";
  navBlurE = ".getNavBlurE($_SESSION["username"]).";
  appUsage = ".getAppUsage($_SESSION["username"]).";
  fileUsage = ".getFileUsage($_SESSION["username"]).";
  junkUsage = ".getJunkUsage($_SESSION["username"]).";
}</script>";
}

if (isset($_SESSION["username"])){
  echo "<script> wallpaper = `". getWallpaper($_SESSION["username"]) ."`;  </script>";
}

if (isset($_SESSION["username"])){
  echo "<script> dir = [". getDir($_SESSION["username"]) ."]  </script>";
} else {
  echo "<script> dir = [" . file_get_contents("dirBackup.txt") . "]  </script>";
}

$str = str_replace(["    ", "        "], ["\n", "\n"], file_get_contents("codeWithTletku/applications.txt"));

echo "<script>applications = [" . $str . "]; updateApplications(); 

</script>";

if (isset($_SESSION["username"])) {
  echo "<script>
  let arnei = ['" . implode("','", explode("^^^", getApps($_SESSION["username"]))) . "'];

  for (let i = 0; i < applications.length; i++) {
    if (arnei.includes(applications[i].name)) {
      applications[i].installed = true;
    } else {
      applications[i].installed = false;
    }
  }
    updateApplications();
  </script>";
} else {
  echo "<script>
  let arnei = ['" . implode("','", explode("^^^", getApps($_SESSION["username"]))) . "'];

  for (let i = 0; i < applications.length; i++) {
    applications[i].installed = false;
  }
    applications[0].installed = true;
    applications[1].installed = true;
    applications[2].installed = true;
    applications[3].installed = true;
    applications[4].installed = true;
    applications[5].installed = true;
    applications[6].installed = true;
    applications[7].installed = true;
    applications[8].installed = true;
    applications[9].installed = true;
    applications[28].installed = true;
    updateApplications();
  </script>";
}

?>

<script>
  let widthH = window.innerWidth;
  let heightH = window.innerHeight;
  let newFolderPosX = 140;
  let newFolderPosY = 10;
  for (let i = 0; i < dir.length; i++) {
  lastId++;
  dir[i].id = lastId;
  if (dir[i].parent == "desktop") {
    if (dir[i].type == "folder") {
      let newFolderEl = document.createElement("div");
      newFolderEl.id = dir[i].id;
      newFolderEl.classList.add("desktopIcon");
      newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
      newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
      let newFolderGraphicEl = document.createElement("img");
      newFolderGraphicEl.id = "graphic" + dir[i].id;
      newFolderGraphicEl.src = folderGraphic;
      newFolderGraphicEl.draggable = false;
      newFolderEl.appendChild(newFolderGraphicEl);
      let folderNameEl = document.createElement("p");
      folderNameEl.id = "folderName" + dir[i].id;
      folderNameEl.innerText = dir[i].name;
      newFolderEl.appendChild(folderNameEl);
      desktopEl.appendChild(newFolderEl);
      newFolderEl.style.marginLeft = newFolderPosX + "px";
      newFolderEl.style.marginTop = newFolderPosY + "px";
      newFolderPosX += 130;
      if (newFolderPosX >= widthH - 100) {
        newFolderPosX = 10;
        newFolderPosY += 150;
      }
      newFolderEl.addEventListener("mousedown", () => {
        dir[i].drag = true;
      });
      newFolderEl.addEventListener("click", () => {
        folderWinEl.style.display = "flex";
        setTimeout(() => {
          folderWinEl.style.transform = "none";
          folderWinEl.style.opacity = "100%";
        }, 1);
        storageTaskEl.style.display = "flex";
        setTimeout(() => {
          storageTaskEl.style.transform = "none";
          storageTaskEl.style.opacity = "100%";
        }, 1);
        if (folder.maximized) {
          maximizeFolder();
        }
        folderWinEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
        folderWinEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
        folder.open = true;
        ls = i;
        selectWin(folderWinEl);
      });
      newFolderEl.addEventListener("contextmenu", () => {
        for (let j = 0; j < dir.length; j++) {
          if (dir[j].parent == "clipboard") {
            dir.splice(j, 1);
          }
        }
        newFolderEl.outerHTML = "";
        dir[i].parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
        closeFolder();
      });
    } else if (dir[i].type == "document") {
      let newFolderEl = document.createElement("div");
      newFolderEl.id = dir[i].id;
      newFolderEl.classList.add("desktopIcon");
      newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
      newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
      let newFolderGraphicEl = document.createElement("img");
      newFolderGraphicEl.src = "images/notepad.png";
      newFolderGraphicEl.draggable = false;
      newFolderEl.appendChild(newFolderGraphicEl);
      let folderNameEl = document.createElement("p");
      folderNameEl.id = "documentName" + dir[i].id;
      folderNameEl.innerText = dir[i].name;
      newFolderEl.appendChild(folderNameEl);
      desktopEl.appendChild(newFolderEl);
      newFolderEl.style.marginLeft = newFolderPosX + "px";
      newFolderEl.style.marginTop = newFolderPosY + "px";
      newFolderPosX += 130;
      if (newFolderPosX >= widthH - 100) {
        newFolderPosX = 10;
        newFolderPosY += 150;
      }
      newFolderEl.addEventListener("mousedown", () => {
        dir[i].drag = true;
      });
      newFolderEl.addEventListener("click", () => {
        openNotepad();
        notepadLS = i;
        notepadContentVekEl.value = dir[i].content;
      });
      newFolderEl.addEventListener("contextmenu", () => {
        for (let j = 0; j < dir.length; j++) {
          if (dir[j].parent == "clipboard") {
            dir.splice(j, 1);
          }
        }
        newFolderEl.outerHTML = "";
        dir[i].parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
        closeFolder();
      });
    } else if (dir[i].type == "html") {
      let newFolderEl = document.createElement("div");
      newFolderEl.id = dir[i].id;
      newFolderEl.classList.add("desktopIcon");
      newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
      newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
      let newFolderGraphicEl = document.createElement("img");
      newFolderGraphicEl.src = "images/html.svg";
      newFolderGraphicEl.draggable = false;
      newFolderEl.appendChild(newFolderGraphicEl);
      let folderNameEl = document.createElement("p");
      folderNameEl.id = "documentName" + dir[i].id;
      folderNameEl.innerText = dir[i].name;
      newFolderEl.appendChild(folderNameEl);
      desktopEl.appendChild(newFolderEl);
      newFolderEl.style.marginLeft = newFolderPosX + "px";
      newFolderEl.style.marginTop = newFolderPosY + "px";
      newFolderPosX += 130;
      if (newFolderPosX >= widthH - 100) {
        newFolderPosX = 10;
        newFolderPosY += 150;
      }
      newFolderEl.addEventListener("mousedown", () => {
        dir[i].drag = true;
      });
      newFolderEl.addEventListener("click", () => {
        openPrism();
                lastId++;
                let newTab = {
                  id: lastId,
                  href: "*con*" + dir[i].content
                };
                tabs.push(newTab);
                tabIndex = tabs.length - 1;
                aukaContentEl.srcdoc = dir[i].content;
      });
      newFolderEl.addEventListener("contextmenu", () => {
        for (let j = 0; j < dir.length; j++) {
          if (dir[j].parent == "clipboard") {
            dir.splice(j, 1);
          }
        }
        newFolderEl.outerHTML = "";
        dir[i].parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
        closeFolder();
      });
    } else if (dir[i].type == "let") {
      let newFolderEl = document.createElement("div");
      newFolderEl.id = dir[i].id;
      newFolderEl.classList.add("desktopIcon");
      newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
      newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
      let newFolderGraphicEl = document.createElement("img");
      newFolderGraphicEl.src = "images/let.png";
      newFolderGraphicEl.draggable = false;
      newFolderEl.appendChild(newFolderGraphicEl);
      let folderNameEl = document.createElement("p");
      folderNameEl.id = "documentName" + dir[i].id;
      folderNameEl.innerText = dir[i].name;
      newFolderEl.appendChild(folderNameEl);
      desktopEl.appendChild(newFolderEl);
      newFolderEl.style.marginLeft = newFolderPosX + "px";
      newFolderEl.style.marginTop = newFolderPosY + "px";
      newFolderPosX += 130;
      if (newFolderPosX >= widthH - 100) {
        newFolderPosX = 10;
        newFolderPosY += 150;
      }
      newFolderEl.addEventListener("mousedown", () => {
        dir[i].drag = true;
      });
      newFolderEl.addEventListener("click", () => {
        eval(dir[i].content);
      });
      newFolderEl.addEventListener("contextmenu", () => {
        for (let j = 0; j < dir.length; j++) {
          if (dir[j].parent == "clipboard") {
            dir.splice(j, 1);
          }
        }
        newFolderEl.outerHTML = "";
        dir[i].parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
        closeFolder();
      });
    } else if (dir[i].type == "o++") {
      let newFolderEl = document.createElement("div");
      newFolderEl.id = dir[i].id;
      newFolderEl.classList.add("desktopIcon");
      newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
      newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
      let newFolderGraphicEl = document.createElement("img");
      newFolderGraphicEl.src = "images/o++.png";
      newFolderGraphicEl.draggable = false;
      newFolderEl.appendChild(newFolderGraphicEl);
      let folderNameEl = document.createElement("p");
      folderNameEl.id = "documentName" + dir[i].id;
      folderNameEl.innerText = dir[i].name;
      newFolderEl.appendChild(folderNameEl);
      desktopEl.appendChild(newFolderEl);
      newFolderEl.style.marginLeft = newFolderPosX + "px";
      newFolderEl.style.marginTop = newFolderPosY + "px";
      newFolderPosX += 130;
      if (newFolderPosX >= widthH - 100) {
        newFolderPosX = 10;
        newFolderPosY += 150;
      }
      newFolderEl.addEventListener("mousedown", () => {
        dir[i].drag = true;
      });
      newFolderEl.addEventListener("click", () => {
        eval(dir[i].content);
      });
      newFolderEl.addEventListener("contextmenu", () => {
        for (let j = 0; j < dir.length; j++) {
          if (dir[j].parent == "clipboard") {
            dir.splice(j, 1);
          }
        }
        newFolderEl.outerHTML = "";
        dir[i].parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
        closeFolder();
      });
    } else if (dir[i].type == "image") {
      let newFolderEl = document.createElement("div");
      newFolderEl.id = dir[i].id;
      newFolderEl.classList.add("desktopIcon");
      newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
      newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
      let newFolderGraphicEl = document.createElement("img");
      newFolderGraphicEl.id = "graphic" + dir[i].id;
      newFolderGraphicEl.src = dir[i].content;
      newFolderGraphicEl.style.border = "1px solid black";
      newFolderGraphicEl.style.backgroundColor = "white";
      newFolderGraphicEl.draggable = false;
      newFolderEl.appendChild(newFolderGraphicEl);
      let folderNameEl = document.createElement("p");
      folderNameEl.id = "imageName" + dir[i].id;
      folderNameEl.innerText = dir[i].name;
      newFolderEl.appendChild(folderNameEl);
      desktopEl.appendChild(newFolderEl);
      newFolderEl.style.marginLeft = newFolderPosX + "px";
      newFolderEl.style.marginTop = newFolderPosY + "px";
      newFolderPosX += 130;
      if (newFolderPosX >= widthH - 100) {
        newFolderPosX = 10;
        newFolderPosY += 150;
      }
      newFolderEl.addEventListener("mousedown", () => {
        dir[i].drag = true;
      });
      newFolderEl.addEventListener("click", () => {
        openMediaViewer();
        mediaO = i;
        okOpenMedia();
      });
      newFolderEl.addEventListener("contextmenu", () => {
        for (let j = 0; j < dir.length; j++) {
          if (dir[j].parent == "clipboard") {
            dir.splice(j, 1);
          }
        }
        newFolderEl.outerHTML = "";
        dir[i].parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
        closeFolder();
      });
    } else if (dir[i].type == "music") {
      let newFolderEl = document.createElement("div");
      newFolderEl.id = dir[i].id;
      newFolderEl.classList.add("desktopIcon");
      newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
      newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
      let newFolderGraphicEl = document.createElement("img");
      newFolderGraphicEl.src = "images/music.png";
      newFolderGraphicEl.draggable = false;
      newFolderEl.appendChild(newFolderGraphicEl);
      let folderNameEl = document.createElement("p");
      folderNameEl.id = "musicName" + dir[i].id;
      folderNameEl.innerText = dir[i].name;
      newFolderEl.appendChild(folderNameEl);
      desktopEl.appendChild(newFolderEl);
      newFolderEl.style.marginLeft = newFolderPosX + "px";
      newFolderEl.style.marginTop = newFolderPosY + "px";
      newFolderPosX += 130;
      if (newFolderPosX >= widthH - 100) {
        newFolderPosX = 10;
        newFolderPosY += 150;
      }
      newFolderEl.addEventListener("mousedown", () => {
        dir[i].drag = true;
      });
      newFolderEl.addEventListener("click", () => {
        openMediaViewer();
        mediaO = i;
        okOpenMedia();
      });
      newFolderEl.addEventListener("contextmenu", () => {
        for (let j = 0; j < dir.length; j++) {
          if (dir[j].parent == "clipboard") {
            dir.splice(j, 1);
          }
        }
        newFolderEl.outerHTML = "";
        dir[i].parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
        closeFolder();
      });
    }
  }
}
</script>