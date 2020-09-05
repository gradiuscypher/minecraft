var overviewerConfig = {
    "tilesets": [
        {
            "north_direction": 0,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "world": "Core01",
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "path": "day",
            "base": "",
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "imgextension": "png",
            "maxZoom": 10,
            "minZoom": 0,
            "last_rendertime": 1599339480,
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ]
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599339685",
        "debug": true,
        "controls": {
            "pan": true,
            "overlays": true,
            "zoom": true,
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "spawn": true
        }
    }
};
