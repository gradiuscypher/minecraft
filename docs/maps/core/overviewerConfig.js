var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599058888",
        "controls": {
            "compass": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true,
            "spawn": true
        },
        "debug": true
    },
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "last_rendertime": 1599058680,
            "base": "",
            "showlocationmarker": true,
            "maxZoom": 10,
            "name": "Daytime Render",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "minZoom": 0,
            "world": "Core01",
            "isOverlay": false,
            "poititle": "Markers",
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "defaultZoom": 1
        }
    ]
};
