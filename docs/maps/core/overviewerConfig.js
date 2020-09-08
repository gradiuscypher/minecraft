var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "path": "day",
            "name": "Daytime Render",
            "imgextension": "png",
            "showlocationmarker": true,
            "base": "",
            "poititle": "Markers",
            "maxZoom": 10,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "north_direction": 0,
            "zoomLevels": 10,
            "minZoom": 0,
            "last_rendertime": 1599595080,
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ]
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "pan": true
        },
        "debug": true,
        "cacheTag": "1599595285"
    }
};
