var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "maxZoom": 9,
            "imgextension": "png",
            "last_rendertime": 1595501880,
            "name": "Daytime Render",
            "world": "Core01",
            "base": "",
            "isOverlay": false,
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 9,
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "poititle": "Markers",
            "minZoom": 0
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "pan": true
        },
        "cacheTag": "1595502081"
    }
};
