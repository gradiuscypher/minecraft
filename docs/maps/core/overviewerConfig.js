var overviewerConfig = {
    "map": {
        "controls": {
            "spawn": true,
            "pan": true,
            "overlays": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1594418764"
    },
    "tilesets": [
        {
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "zoomLevels": 9,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "showlocationmarker": true,
            "path": "day",
            "isOverlay": false,
            "base": "",
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "defaultZoom": 1,
            "maxZoom": 9,
            "name": "Daytime Render",
            "world": "Core01",
            "last_rendertime": 1594418244
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    }
};
