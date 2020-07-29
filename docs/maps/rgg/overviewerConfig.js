var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "map": {
        "controls": {
            "zoom": true,
            "compass": true,
            "spawn": true,
            "overlays": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1596016964",
        "debug": true
    },
    "tilesets": [
        {
            "path": "day",
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "maxZoom": 8,
            "poititle": "Markers",
            "showlocationmarker": true,
            "name": "Daytime Render",
            "isOverlay": false,
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "world": "world",
            "imgextension": "png",
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "north_direction": 0,
            "last_rendertime": 1596016579
        }
    ]
};
