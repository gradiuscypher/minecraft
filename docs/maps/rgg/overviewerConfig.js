var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png"
        },
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "tileSize": 384
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1597222962"
    },
    "tilesets": [
        {
            "maxZoom": 8,
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1597222579,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "imgextension": "png",
            "poititle": "Markers",
            "base": "",
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "defaultZoom": 1,
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "world": "world",
            "path": "day"
        }
    ],
    "worlds": [
        "world"
    ]
};
