var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "map": {
        "debug": true,
        "cacheTag": "1596283362",
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true,
            "mapType": true,
            "spawn": true,
            "pan": true
        }
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "world": "world",
            "path": "day",
            "poititle": "Markers",
            "showlocationmarker": true,
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1596282979,
            "maxZoom": 8,
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "north_direction": 0,
            "defaultZoom": 1,
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "minZoom": 0
        }
    ]
};
