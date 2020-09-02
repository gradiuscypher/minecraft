var overviewerConfig = {
    "map": {
        "debug": true,
        "controls": {
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "overlays": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1599066170"
    },
    "worlds": [
        "world"
    ],
    "CONST": {
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "north_direction": 0,
            "path": "day",
            "base": "",
            "minZoom": 0,
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
            "imgextension": "png",
            "defaultZoom": 1,
            "showlocationmarker": true,
            "last_rendertime": 1599065779,
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "world": "world",
            "isOverlay": false,
            "maxZoom": 8
        }
    ]
};
