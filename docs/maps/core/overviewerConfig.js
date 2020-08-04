var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "zoomLevels": 10,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "north_direction": 0,
            "maxZoom": 10,
            "defaultZoom": 1,
            "path": "day",
            "imgextension": "png",
            "base": "",
            "minZoom": 0,
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1596556680,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1596556885",
        "controls": {
            "overlays": true,
            "pan": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true,
            "spawn": true
        }
    }
};
