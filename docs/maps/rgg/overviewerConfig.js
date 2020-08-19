var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "maxZoom": 8,
            "zoomLevels": 8,
            "imgextension": "png",
            "path": "day",
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "world": "world",
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "last_rendertime": 1597841779,
            "defaultZoom": 1,
            "minZoom": 0,
            "north_direction": 0
        }
    ],
    "map": {
        "cacheTag": "1597842166",
        "debug": true,
        "controls": {
            "pan": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "compass": true
        },
        "north_direction": "lower-left"
    },
    "worlds": [
        "world"
    ]
};
