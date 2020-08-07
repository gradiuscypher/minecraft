var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png"
        },
        "tileSize": 384
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "imgextension": "png",
            "poititle": "Markers",
            "path": "day",
            "world": "Core01",
            "zoomLevels": 10,
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1596805080,
            "north_direction": 0,
            "maxZoom": 10,
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "showlocationmarker": true
        }
    ],
    "map": {
        "controls": {
            "spawn": true,
            "zoom": true,
            "compass": true,
            "mapType": true,
            "pan": true,
            "coordsBox": true,
            "overlays": true
        },
        "cacheTag": "1596805282",
        "north_direction": "lower-left",
        "debug": true
    }
};
