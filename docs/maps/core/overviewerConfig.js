var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "isOverlay": false,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "maxZoom": 10,
            "last_rendertime": 1595923080,
            "bgcolor": "#1a1a1a",
            "base": "",
            "showlocationmarker": true,
            "north_direction": 0,
            "world": "Core01",
            "minZoom": 0,
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "name": "Daytime Render"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "spawn": true,
            "compass": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true
        },
        "cacheTag": "1595923306",
        "debug": true
    }
};
