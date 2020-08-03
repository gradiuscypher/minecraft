var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "minZoom": 0,
            "imgextension": "png",
            "last_rendertime": 1596466680,
            "north_direction": 0,
            "path": "day",
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "zoomLevels": 10,
            "base": "",
            "poititle": "Markers"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "pan": true,
            "overlays": true,
            "compass": true,
            "spawn": true,
            "zoom": true,
            "mapType": true,
            "coordsBox": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1596466882",
        "debug": true
    }
};
