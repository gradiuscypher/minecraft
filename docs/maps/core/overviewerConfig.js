var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "path": "day",
            "north_direction": 0,
            "showlocationmarker": true,
            "world": "Core01",
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "last_rendertime": 1594223876,
            "minZoom": 0,
            "maxZoom": 9,
            "bgcolor": "#1a1a1a",
            "base": "",
            "defaultZoom": 1,
            "zoomLevels": 9,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "imgextension": "png"
        }
    ],
    "map": {
        "cacheTag": "1594224109",
        "debug": true,
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "mapType": true,
            "overlays": true
        },
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ]
};
