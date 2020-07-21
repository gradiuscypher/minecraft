var overviewerConfig = {
    "map": {
        "cacheTag": "1595350882",
        "debug": true,
        "controls": {
            "overlays": true,
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "coordsBox": true
        },
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "zoomLevels": 9,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "maxZoom": 9,
            "north_direction": 0,
            "base": "",
            "world": "Core01",
            "name": "Daytime Render",
            "showlocationmarker": true,
            "minZoom": 0,
            "defaultZoom": 1,
            "isOverlay": false,
            "last_rendertime": 1595350680
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap"
    }
};
