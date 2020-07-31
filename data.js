var APP_DATA = {
  "scenes": [
    {
      "id": "0-phase2_001",
      "name": "PHASE2_001",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.221035086440807,
        "pitch": -0.06907121612993805,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8367174476067483,
          "pitch": 0.05708227009191447,
          "rotation": 4.71238898038469,
          "target": "1-phase1_101"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-phase1_101",
      "name": "PHASE1_101",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3718,
      "initialViewParameters": {
        "yaw": -1.8063004567456407,
        "pitch": 0.1612948035454842,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8206584990067647,
          "pitch": 0.0358679834528548,
          "rotation": 7.853981633974483,
          "target": "0-phase2_001"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2599573106471613,
          "pitch": -0.17185416698114153,
          "title": "Crew",
          "text": "3 men"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
