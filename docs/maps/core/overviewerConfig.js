var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERLEFT": 0
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "base": "",
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "world": "Core01",
            "maxZoom": 9,
            "showlocationmarker": true,
            "path": "day",
            "last_rendertime": 1595739480,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "imgextension": "png",
            "zoomLevels": 9
        }
    ],
    "map": {
        "cacheTag": "1595739801",
        "controls": {
            "spawn": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true,
            "overlays": true,
            "zoom": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
