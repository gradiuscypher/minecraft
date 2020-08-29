var overviewerConfig = {
    "tilesets": [
        {
            "minZoom": 0,
            "base": "",
            "maxZoom": 10,
            "poititle": "Markers",
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "zoomLevels": 10,
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "imgextension": "png",
            "world": "Core01",
            "name": "Daytime Render",
            "last_rendertime": 1598713080,
            "path": "day"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "compass": true,
            "mapType": true,
            "pan": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true
        },
        "cacheTag": "1598713284"
    },
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    }
};
