var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "base": "",
            "world": "Core01",
            "imgextension": "png",
            "north_direction": 0,
            "showlocationmarker": true,
            "poititle": "Markers",
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "maxZoom": 10,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597802280,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "minZoom": 0,
            "defaultZoom": 1,
            "isOverlay": false
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "compass": true,
            "spawn": true,
            "zoom": true,
            "mapType": true
        },
        "cacheTag": "1597802483"
    },
    "worlds": [
        "Core01"
    ]
};
