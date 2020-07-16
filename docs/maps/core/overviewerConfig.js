var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 9,
            "north_direction": 0,
            "maxZoom": 9,
            "defaultZoom": 1,
            "minZoom": 0,
            "imgextension": "png",
            "poititle": "Markers",
            "isOverlay": false,
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1594864679
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true,
            "mapType": true,
            "zoom": true
        },
        "debug": true,
        "cacheTag": "1594864883"
    }
};
