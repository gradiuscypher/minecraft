var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        }
    },
    "tilesets": [
        {
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "poititle": "Markers",
            "name": "Daytime Render",
            "isOverlay": false,
            "imgextension": "png",
            "path": "day",
            "base": "",
            "last_rendertime": 1595451480,
            "zoomLevels": 9,
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 9,
            "minZoom": 0,
            "world": "Core01"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1595451702",
        "debug": true,
        "controls": {
            "compass": true,
            "spawn": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true,
            "pan": true,
            "overlays": true
        }
    }
};
