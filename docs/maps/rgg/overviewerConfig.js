var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3
    },
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "controls": {
            "spawn": true,
            "overlays": true,
            "zoom": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true
        },
        "cacheTag": "1597449765",
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "world": "world",
            "isOverlay": false,
            "north_direction": 0,
            "defaultZoom": 1,
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "path": "day",
            "base": "",
            "minZoom": 0,
            "showlocationmarker": true,
            "imgextension": "png",
            "poititle": "Markers",
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1597449379
        }
    ]
};
