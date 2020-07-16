var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1594868561",
        "controls": {
            "overlays": true,
            "zoom": true,
            "compass": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true
        },
        "debug": true
    },
    "tilesets": [
        {
            "north_direction": 0,
            "path": "day",
            "zoomLevels": 8,
            "last_rendertime": 1594868179,
            "isOverlay": false,
            "world": "world",
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "imgextension": "png",
            "defaultZoom": 1,
            "poititle": "Markers"
        }
    ]
};
