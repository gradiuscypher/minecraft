var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1597125761",
        "controls": {
            "compass": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true,
            "mapType": true,
            "zoom": true
        }
    },
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "path": "day",
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "north_direction": 0,
            "maxZoom": 8,
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "last_rendertime": 1597125379,
            "isOverlay": false,
            "imgextension": "png",
            "poititle": "Markers",
            "defaultZoom": 1,
            "zoomLevels": 8,
            "minZoom": 0
        }
    ],
    "worlds": [
        "world"
    ]
};
