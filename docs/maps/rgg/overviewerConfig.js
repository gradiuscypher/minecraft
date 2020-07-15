var overviewerConfig = {
    "map": {
        "controls": {
            "zoom": true,
            "mapType": true,
            "pan": true,
            "coordsBox": true,
            "overlays": true,
            "spawn": true,
            "compass": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1594828961"
    },
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "tileSize": 384
    },
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "isOverlay": false,
            "path": "day",
            "imgextension": "png",
            "name": "Daytime Render",
            "poititle": "Markers",
            "minZoom": 0,
            "base": "",
            "north_direction": 0,
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1594828579,
            "world": "world",
            "zoomLevels": 8,
            "maxZoom": 8
        }
    ],
    "worlds": [
        "world"
    ]
};
