var overviewerConfig = {
    "tilesets": [
        {
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "imgextension": "png",
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "base": "",
            "north_direction": 0,
            "minZoom": 0,
            "last_rendertime": 1598637480,
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "defaultZoom": 1,
            "isOverlay": false,
            "zoomLevels": 10,
            "world": "Core01"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598637685",
        "controls": {
            "spawn": true,
            "overlays": true,
            "pan": true,
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true
        }
    },
    "CONST": {
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384
    }
};
