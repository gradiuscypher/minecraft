var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png"
        },
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2
    },
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597640565",
        "controls": {
            "pan": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true,
            "spawn": true,
            "overlays": true,
            "mapType": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "base": "",
            "isOverlay": false,
            "imgextension": "png",
            "north_direction": 0,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "zoomLevels": 8,
            "maxZoom": 8,
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1597640179,
            "world": "world",
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "world"
    ]
};
