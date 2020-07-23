var overviewerConfig = {
    "map": {
        "controls": {
            "spawn": true,
            "overlays": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true
        },
        "cacheTag": "1595520083",
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "maxZoom": 9,
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "showlocationmarker": true,
            "world": "Core01",
            "path": "day",
            "isOverlay": false,
            "minZoom": 0,
            "poititle": "Markers",
            "base": "",
            "zoomLevels": 9,
            "last_rendertime": 1595519880,
            "center": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "north_direction": 0
        }
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1
    }
};
