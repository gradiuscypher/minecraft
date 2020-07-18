var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "mapDivId": "mcmap"
    },
    "map": {
        "cacheTag": "1595030561",
        "controls": {
            "compass": true,
            "zoom": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "pan": true
        },
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "path": "day",
            "north_direction": 0,
            "showlocationmarker": true,
            "last_rendertime": 1595030179,
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "base": "",
            "zoomLevels": 8,
            "maxZoom": 8,
            "world": "world",
            "imgextension": "png",
            "defaultZoom": 1,
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render"
        }
    ]
};
