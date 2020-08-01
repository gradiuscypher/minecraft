var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png"
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "showlocationmarker": true,
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "maxZoom": 10,
            "poititle": "Markers",
            "isOverlay": false,
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "north_direction": 0,
            "last_rendertime": 1596258001,
            "minZoom": 0,
            "defaultZoom": 1,
            "zoomLevels": 10
        }
    ],
    "map": {
        "cacheTag": "1596258108",
        "controls": {
            "mapType": true,
            "compass": true,
            "overlays": true,
            "pan": true,
            "spawn": true,
            "zoom": true,
            "coordsBox": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
