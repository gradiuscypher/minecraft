var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "map": {
        "controls": {
            "pan": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true,
            "zoom": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1595944963",
        "debug": true
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "last_rendertime": 1595944579,
            "showlocationmarker": true,
            "base": "",
            "name": "Daytime Render",
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "path": "day",
            "world": "world",
            "maxZoom": 8,
            "imgextension": "png",
            "defaultZoom": 1,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8
        }
    ]
};
