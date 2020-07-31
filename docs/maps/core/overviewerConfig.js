var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "path": "day",
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "last_rendertime": 1596225480,
            "north_direction": 0,
            "name": "Daytime Render",
            "zoomLevels": 10,
            "poititle": "Markers",
            "maxZoom": 10,
            "imgextension": "png",
            "world": "Core01",
            "minZoom": 0,
            "defaultZoom": 1,
            "showlocationmarker": true
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "mapType": true,
            "coordsBox": true,
            "compass": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "zoom": true
        },
        "cacheTag": "1596225683"
    }
};
