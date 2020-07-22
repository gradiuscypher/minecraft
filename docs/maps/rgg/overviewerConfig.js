var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERLEFT": 0
    },
    "map": {
        "debug": true,
        "cacheTag": "1595404960",
        "controls": {
            "mapType": true,
            "spawn": true,
            "compass": true,
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true
        },
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "isOverlay": false,
            "maxZoom": 8,
            "defaultZoom": 1,
            "minZoom": 0,
            "base": "",
            "showlocationmarker": true,
            "name": "Daytime Render",
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "last_rendertime": 1595404579,
            "imgextension": "png",
            "world": "world",
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0
        }
    ],
    "worlds": [
        "world"
    ]
};
