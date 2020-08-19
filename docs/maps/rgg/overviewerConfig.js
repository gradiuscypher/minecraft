var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "path": "day",
            "defaultZoom": 1,
            "showlocationmarker": true,
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "maxZoom": 8,
            "base": "",
            "north_direction": 0,
            "name": "Daytime Render",
            "imgextension": "png",
            "zoomLevels": 8,
            "minZoom": 0,
            "last_rendertime": 1597798579
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "mapType": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true,
            "overlays": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1597798969"
    },
    "worlds": [
        "world"
    ]
};
