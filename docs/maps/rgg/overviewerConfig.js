var overviewerConfig = {
    "map": {
        "controls": {
            "compass": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "coordsBox": true
        },
        "cacheTag": "1596812562",
        "north_direction": "lower-left",
        "debug": true
    },
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "base": "",
            "world": "world",
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "isOverlay": false,
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "name": "Daytime Render",
            "showlocationmarker": true,
            "imgextension": "png",
            "last_rendertime": 1596812179,
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "maxZoom": 8
        }
    ],
    "worlds": [
        "world"
    ]
};
