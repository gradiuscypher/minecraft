var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        },
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599109290",
        "debug": true,
        "controls": {
            "compass": true,
            "pan": true,
            "spawn": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true,
            "zoom": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "showlocationmarker": true,
            "base": "",
            "defaultZoom": 1,
            "isOverlay": false,
            "zoomLevels": 10,
            "imgextension": "png",
            "world": "Core01",
            "last_rendertime": 1599109080,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "north_direction": 0,
            "name": "Daytime Render"
        }
    ]
};
