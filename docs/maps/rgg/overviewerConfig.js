var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0
    },
    "map": {
        "cacheTag": "1596780163",
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "mapType": true,
            "zoom": true,
            "pan": true
        },
        "debug": true
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "world": "world",
            "maxZoom": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "path": "day",
            "name": "Daytime Render",
            "poititle": "Markers",
            "last_rendertime": 1596779779,
            "isOverlay": false,
            "north_direction": 0,
            "showlocationmarker": true,
            "base": "",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "defaultZoom": 1
        }
    ]
};
