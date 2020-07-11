var overviewerConfig = {
    "tilesets": [
        {
            "world": "Core01",
            "path": "day",
            "north_direction": 0,
            "poititle": "Markers",
            "maxZoom": 9,
            "minZoom": 0,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "imgextension": "png",
            "zoomLevels": 9,
            "last_rendertime": 1594472307
        }
    ],
    "CONST": {
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "spawn": true,
            "overlays": true,
            "zoom": true,
            "coordsBox": true,
            "pan": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1594472823"
    }
};
