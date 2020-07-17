var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1594990960",
        "controls": {
            "zoom": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "spawn": true,
            "compass": true,
            "mapType": true
        },
        "debug": true,
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "imgextension": "png",
            "path": "day",
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "maxZoom": 8,
            "minZoom": 0,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "north_direction": 0,
            "world": "world",
            "zoomLevels": 8,
            "base": "",
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1594990579
        }
    ]
};
