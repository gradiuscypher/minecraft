var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "imgextension": "png",
            "north_direction": 0,
            "zoomLevels": 10,
            "maxZoom": 10,
            "defaultZoom": 1,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "showlocationmarker": true,
            "minZoom": 0,
            "path": "day",
            "name": "Daytime Render",
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1599307080
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "pan": true,
            "compass": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "zoom": true,
            "mapType": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599307287"
    }
};
