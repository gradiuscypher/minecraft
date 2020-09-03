var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "map": {
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "overlays": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1599123686",
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "last_rendertime": 1599123480,
            "maxZoom": 10,
            "base": "",
            "path": "day",
            "defaultZoom": 1,
            "zoomLevels": 10,
            "minZoom": 0,
            "bgcolor": "#1a1a1a"
        }
    ]
};
