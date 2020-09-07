var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0
    },
    "map": {
        "cacheTag": "1599454969",
        "debug": true,
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "mapType": true,
            "compass": true,
            "pan": true,
            "overlays": true,
            "spawn": true
        },
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "path": "day",
            "bgcolor": "#1a1a1a",
            "base": "",
            "showlocationmarker": true,
            "last_rendertime": 1599454579,
            "maxZoom": 8,
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "poititle": "Markers",
            "name": "Daytime Render",
            "minZoom": 0,
            "world": "world",
            "zoomLevels": 8
        }
    ],
    "worlds": [
        "world"
    ]
};
